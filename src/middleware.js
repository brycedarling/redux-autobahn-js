import { Connection } from 'autobahn';
import * as types from './types';

const connected = () => ({
  type: types.CONNECTED,
});

const disconnected = () => ({
  type: types.DISCONNECTED,
});

const connectionOpened = session => ({
  type: types.CONNECTION_OPENED,
  session,
});

const connectionClosed = () => ({
  type: types.CONNECTION_CLOSED,
});

const subscribed = subscription => ({
  type: types.SUBSCRIBED,
  topic: subscription.topic,
  subscription,
});

const subscribeError = error => ({
  type: types.SUBSCRIBE_ERROR,
  error,
});

const unsubscribed = subscription => ({
  type: types.UNSUBSCRIBED,
  topic: subscription.topic,
  subscription,
});

const unsubscribeError = error => ({
  type: types.UNSUBSCRIBE_ERROR,
  error,
});

const published = (publication, topic, args, kwargs, options) => ({
  type: types.PUBLISHED,
  publication,
  topic,
  args,
  kwargs,
  options,
});

const publishError = error => ({
  type: types.PUBLISH_ERROR,
  error,
});

const event = (topic, args, kwargs, details) => ({
  type: types.EVENT,
  topic,
  args,
  kwargs,
  details,
});

const registered = registration => ({
  type: types.REGISTERED,
  registration,
});

const registerError = error => ({
  type: types.REGISTER_ERROR,
  error,
});

const unregistered = registration => ({
  type: types.UNREGISTERED,
  registration,
});

const unregisterError = error => ({
  type: types.UNREGISTER_ERROR,
  error,
});

const callError = error => ({
  type: types.CALL_ERROR,
  error,
});

const result = value => ({
  type: types.RESULT,
  result: value,
});

const isConnected = session => session && session.isOpen;

const getSubscription = action => action.subscription;

const handleAction = (connection, session, dispatch, next, action) => {
  switch (action.type) {
    case types.OPEN_CONNECTION:
      return !isConnected(session) ? dispatch(connected()) : connection.open();

    case types.CLOSE_CONNECTION:
      return !isConnected(session) ? dispatch(disconnected()) : connection.close();

    case types.SUBSCRIBE:
      return !isConnected(session) ? dispatch(disconnected())
        : session.subscribe(action.topic, (args, kwargs, details) => {
          dispatch(event(action.topic, args, kwargs, details));
        }).then((subscription) => {
          dispatch(subscribed(subscription));
        }, (err) => {
          dispatch(subscribeError(err));
        });

    case types.UNSUBSCRIBE:
      return !isConnected(session) ? dispatch(disconnected())
        : session.unsubscribe(getSubscription(action)).then((success) => {
          if (success) dispatch(unsubscribed(action.subscription));
          else unsubscribeError('Failed to unsubscribe');
        }, (err) => {
          dispatch(unsubscribeError(err));
        });

    case types.PUBLISH:
      return !isConnected(session) ? dispatch(disconnected())
        : session.publish(action.topic, action.args, action.kwargs,
          { ...action.options, acknowledge: true }).then((pub) => {
          dispatch(published(pub, action.topic, action.args, action.kwargs, action.options));
        }, (err) => {
          dispatch(publishError(err));
        });

    case types.REGISTER:
      return !isConnected(session) ? dispatch(disconnected())
        : session.register(action.procedure, action.endpoint, action.options).then((reg) => {
          dispatch(registered(reg));
        }, (err) => {
          dispatch(registerError(err));
        });

    case types.UNREGISTER:
      return !isConnected(session) ? dispatch(disconnected())
        : session.unregister(action.registration).then(() => {
          dispatch(unregistered(action.registration));
        }, (err) => {
          dispatch(unregisterError(err));
        });

    case types.CALL:
      return !isConnected(session) ? dispatch(disconnected())
        : session.call(action.procedure, action.args, action.kwargs, action.options).then((res) => {
          dispatch(result(res));
        }, (err) => {
          dispatch(callError(err));
        });

    default:
      return next(action);
  }
};

const assert = (assertion, message) => {
  if (!assertion) {
    throw new Error(message);
  }
};

const createMiddleware = (connection) => {
  assert(connection instanceof Connection, 'autobahn.Connection required');

  return ({ dispatch }) => {
    let session = null;

    /* eslint-disable no-param-reassign */
    connection.onopen = (s) => {
      session = s;

      dispatch(connectionOpened(session));
    };

    connection.onclose = () => {
      session = null;

      dispatch(connectionClosed());
    };

    return next => action => handleAction(connection, session, dispatch, next, action);
  };
};

export default createMiddleware;
