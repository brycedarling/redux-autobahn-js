/**
 * @namespace redux-autobahn:middleware
 */
import { Connection } from 'autobahn';
import * as types from './types';

let _connection = null;
let _session = null;
let _dispatch = null;

/**
 * Returns a redux action with type CONNECTED
 * @function connected
 * @memberof redux-autobahn:middleware
 * @return {object} redux action
 */
const connected = () => ({
  type: types.CONNECTED,
});

/**
 * Returns a redux action with type DISCONNECTED
 * @function disconnected
 * @memberof redux-autobahn:middleware
 * @return {object} redux action
 */
const disconnected = () => ({
  type: types.DISCONNECTED,
});

/**
 * Returns a redux action with type CONNECTION_OPENED and the given session object
 * @function connectionOpened
 * @memberof redux-autobahn:middleware
 * @param {object} session - The session object for the opened connection.
 * @return {object} redux action
 */
const connectionOpened = session => ({
  type: types.CONNECTION_OPENED,
  session,
});

/**
 * Returns a redux action with type CONNECTION_CLOSED
 * @function connectionClosed
 * @memberof redux-autobahn:middleware
 * @return {object} redux action
 */
const connectionClosed = () => ({
  type: types.CONNECTION_CLOSED,
});

/**
 * Returns a redux action with type SUBSCRIBED and the given subscription object and it's topic
 * @function subscribed
 * @memberof redux-autobahn:middleware
 * @param {object} subscription - The subscription object for the topic that was subscribed to.
 * @return {object} redux action
 */
const subscribed = subscription => ({
  type: types.SUBSCRIBED,
  topic: subscription.topic,
  subscription,
});

/**
 * Returns a redux action with type SUBSCRIBE_ERROR and the given subscription error object
 * @function subscribeError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while subscribing.
 * @return {object} redux action
 */
const subscribeError = error => ({
  type: types.SUBSCRIBE_ERROR,
  error,
});

/**
 * Returns a redux action with type UNSUBSCRIBED and the given subscription object and it's topic
 * @function unsubscribed
 * @memberof redux-autobahn:middleware
 * @param {object} subscription - The subscription object for the topic that was unsubscribed from.
 * @return {object} redux action
 */
const unsubscribed = subscription => ({
  type: types.UNSUBSCRIBED,
  topic: subscription.topic,
  subscription,
});

/**
 * Returns a redux action with type UNSUBSCRIBE_ERROR and the given unsubscription error object
 * @function unsubscribeError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while unsubscribing.
 * @return {object} redux action
 */
const unsubscribeError = error => ({
  type: types.UNSUBSCRIBE_ERROR,
  error,
});

/**
 * Returns a redux action with type PUBLISHED
 and the given publication, topic, args, kwargs, and options
 * @function published
 * @memberof redux-autobahn:middleware
 * @param {string} publication - The publication being published to.
 * @param {string} topic - The topic being published to.
 * @param {Array} args - An array of arguments.
 * @param {object} kwargs - An object of keyword arguments.
 * @param {object} options - An object of options.
 * @return {object} redux action
 */
const published = (publication, topic, args, kwargs, options) => ({
  type: types.PUBLISHED,
  publication,
  topic,
  args,
  kwargs,
  options,
});

/**
 * Returns a redux action with type PUBLISH_ERROR and the given publish error object
 * @function publishError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while publishing.
 * @return {object} redux action
 */
const publishError = error => ({
  type: types.PUBLISH_ERROR,
  error,
});

/**
 * Returns a redux action with type EVENT and the given topic, args, kwargs, and details
 * @function event
 * @memberof redux-autobahn:middleware
 * @param {string} topic - The topic being published to.
 * @param {Array} args - An array of arguments.
 * @param {object} kwargs - An object of keyword arguments.
 * @param {object} details - An object of event details.
 * @return {object} redux action
 */
const event = (topic, args, kwargs, details) => ({
  type: types.EVENT,
  topic,
  args,
  kwargs,
  details,
});

/**
 * Returns a redux action with type REGISTERED and the given registration object
 * @function registered
 * @memberof redux-autobahn:middleware
 * @param {object} registration - The registration object being registered to.
 * @return {object} redux action
 */
const registered = registration => ({
  type: types.REGISTERED,
  registration,
});

/**
 * Returns a redux action with type REGISTER_ERROR and the given register error object
 * @function registerError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while registering.
 * @return {object} redux action
 */
const registerError = error => ({
  type: types.REGISTER_ERROR,
  error,
});

/**
 * Returns a redux action with type UNREGISTERED and the given registration object
 * @function unregistered
 * @memberof redux-autobahn:middleware
 * @param {object} registration - The registration object being unregistered from.
 * @return {object} redux action
 */
const unregistered = registration => ({
  type: types.UNREGISTERED,
  registration,
});

/**
 * Returns a redux action with type UNREGISTER_ERROR and the given unregister error object
 * @function unregisterError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while unregistering.
 * @return {object} redux action
 */
const unregisterError = error => ({
  type: types.UNREGISTER_ERROR,
  error,
});

/**
 * Returns a redux action with type CALL_ERROR and the given call error object
 * @function callError
 * @memberof redux-autobahn:middleware
 * @param {object} error - The error that occurred while calling.
 * @return {object} redux action
 */
const callError = error => ({
  type: types.CALL_ERROR,
  error,
});

/**
 * Returns a redux action with type RESULT and the given result value
 * @function result
 * @memberof redux-autobahn:middleware
 * @param {object} value - The value of the result
 * @return {object} redux action
 */
const result = value => ({
  type: types.RESULT,
  result: value,
});

/**
 * Returns a boolean that represents if the session exists and is open, therefore it is connected
 * @function isConnected
 * @memberof redux-autobahn:middleware
 * @param  {object} session  the session object
 * @return {boolean}         returns true if the session exists and is open
 */
const isConnected = session => session && session.isOpen;

/**
 * Returns the subscription from the action
 * @function getSubscription
 * @memberof redux-autobahn:middleware
 * @param  {object} action  the redux action
 * @return {object}         the subscription on the action
 */
const getSubscription = action => action.subscription;

/**
 * Dispatches actions based on action types
 * @function handleAction
 * @memberof redux-autobahn:middleware
 * @param  {object} connection  the connection object
 * @param  {object} session     the session object
 * @param  {function} dispatch  the dispatch function
 * @param  {function} next      the next function
 * @param  {object} action      the redux action
 */
const handleAction = (connection, session, dispatch, next, action) => {
  switch (action.type) {
    case types.OPEN_CONNECTION:
      return isConnected(session) ? dispatch(connected()) : connection.open();

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
          if (action.resultAction) {
            return dispatch(action.resultAction(res));
          }
          return dispatch(result(res));
        }, (err) => {
          if (action.errorAction) {
            return dispatch(action.errorAction(err));
          }
          return dispatch(callError(err));
        });

    default:
      return next(action);
  }
};

/**
 * Throws an error if the assertion is falsy
 * @function assert
 * @memberof redux-autobahn:middleware
 * @param  {object} assertion  the assertion expression
 * @param  {object} message    the assertion message
 * @throws {Error}             throws an error with the given message if the assertion is falsy
 */
const assert = (assertion, message) => {
  if (!assertion) {
    throw new Error(message);
  }
};

/**
 * Sets the passed connection for the middleware that dispatches opened and closed connection actions and handles actions
 * @function setConnection
 * @memberof redux-autobahn:middleware
 * @param  {Connection} newConnection  the connection object
 */
export const setConnection = (newConnection) => {
  assert(
    newConnection &&
      typeof newConnection.open === 'function' &&
      typeof newConnection.close === 'function',
    'autobahn.Connection required'
  );

  // explicitly close the connection first to set a new connection
  assert(!_connection, 'connection already exists');

  _connection = newConnection;

  /* eslint-disable no-param-reassign */
  _connection.onopen = (s) => {
    _session = s;

    _dispatch(connectionOpened(_session));
  };

  _connection.onclose = () => {
    _session = null;

    _dispatch(connectionClosed());
  };
};

/**
 * Closes the current autobahn connection
 * @function closeConnection
 * @memberof redux-autobahn:middleware
 * @param  {string} reason  (optional) a WAMP URI providing a closing reason to the server side (e.g. 'com.myapp.close.signout'). default is `wamp.goodbye.normal`
 * @param  {string} message  human-readable closing message
 */
export const closeConnection = (reason, message) => {
  assert(_connection, 'connection to close does not exist');

  _connection.close(reason, message);
};

export default ({ dispatch }) => {
  _dispatch = dispatch;

  return (next) => (action) => {
    if (!_connection) return next(action);
    return handleAction(_connection, _session, _dispatch, next, action);
  };
};
