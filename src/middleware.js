/* eslint-disable no-underscore-dangle,no-param-reassign,max-len,no-unused-vars */
/**
 * @namespace redux-autobahn:middleware
 */
import * as types from './types';

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
 * @param {object} connection - The object for the opened connection.
 * @return {object} redux action
 */
const connectionOpened = connection => ({
  type: types.CONNECTION_OPENED,
  session: connection.session,
});

/**
 * Returns a redux action with type CONNECTION_CLOSED
 * @function connectionClosed
 * @memberof redux-autobahn:middleware
 * @param {string} reason reason for disconnection
 * @param {object} details disconnect details
 * @return {object} redux action
 */
const connectionClosed = (reason, details) => ({
  type: types.CONNECTION_CLOSED,
  reason,
  details,
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
 * @param {object} procedure - Procedure that was called
 * @param {object} args - Arguments with which procedure was called
 * @param {object} kwargs - Arguments with which procedure was called
 * @param {object} results - Call results
 * @param {object} options - Options
 * @return {object} redux action
 */
const result = (procedure, args, kwargs, results, options) => ({
  type: types.RESULT,
  procedure,
  args,
  kwargs,
  results,
  options,
});

/**
 * Returns a redux action with type PROGRESS and the given progress value
 * Depends on {receive_progress:true} passed as option to CALL action.
 * @function progress
 * @memberof redux-autobahn:middleware
 * @param {object} procedure - Procedure that was called
 * @param {object} args - Arguments with which procedure was called
 * @param {object} kwargs - Arguments with which procedure was called
 * @param {object} results - Call progress results
 * @param {object} options - Options
 * @return {object} redux action
 */
const progress = (procedure, args, kwargs, results, options) => ({
  type: types.PROGRESS,
  procedure,
  args,
  kwargs,
  results,
  options,
});


/**
 * Returns a boolean that represents if the session for the connection exists and is open, therefore it is connected
 * @function isConnected
 * @memberof redux-autobahn:middleware
 * @param  {object} connection  the connection object
 * @return {boolean}         returns true if the session for the connection exists and is open
 */
const isConnected = connection => connection && connection.isOpen;

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
 * @param  {function} dispatch  the dispatch function
 * @param  {function} next      the next function
 * @param  {object} action      the redux action
 */
const handleAction = (connection, dispatch, next, action) => {
  switch (action.type) {
    case types.OPEN_CONNECTION:
      return isConnected(connection) ? dispatch(connected()) : connection.open();

    case types.CLOSE_CONNECTION:
      return !isConnected(connection) ? dispatch(disconnected()) : connection.close();

    case types.SUBSCRIBE:
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.subscribe(action.topic, (args, kwargs, details) => {
          dispatch(event(action.topic, args, kwargs, details));
        }).then((subscription) => {
          dispatch(subscribed(subscription));
        }, (err) => {
          dispatch(subscribeError(err));
        });

    case types.UNSUBSCRIBE:
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.unsubscribe(getSubscription(action)).then((success) => {
          if (success) dispatch(unsubscribed(action.subscription));
          else unsubscribeError('Failed to unsubscribe');
        }, (err) => {
          dispatch(unsubscribeError(err));
        });

    case types.PUBLISH:
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.publish(action.topic, action.args, action.kwargs,
          { ...action.options, acknowledge: true }).then((pub) => {
          dispatch(published(pub, action.topic, action.args, action.kwargs, action.options));
        }, (err) => {
          dispatch(publishError(err));
        });

    case types.REGISTER:
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.register(action.procedure, action.endpoint, action.options).then((reg) => {
          dispatch(registered(reg));
        }, (err) => {
          dispatch(registerError(err));
        });

    case types.UNREGISTER:
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.unregister(action.registration).then(() => {
          dispatch(unregistered(action.registration));
        }, (err) => {
          dispatch(unregisterError(err));
        });

    case types.CALL: {
      let { receive_progress } = action.options;
      if (action.progressAction && receive_progress !== false) {
        receive_progress = true;
      }
      return !isConnected(connection) ? dispatch(disconnected())
        : connection.session.call(action.procedure, action.args, action.kwargs,
          { ...action.options, receive_progress }).then((res) => {
          if (action.resultAction) {
            return dispatch(action.resultAction(res));
          }
          return dispatch(result(action.procedure, action.args, action.kwargs, res, action.options));
        }, (err) => {
          if (action.errorAction) {
            return dispatch(action.errorAction(err));
          }
          return dispatch(callError(err));
        }, (val) => {
          if (action.progressAction) {
            return dispatch(action.progressAction(val));
          }
          return dispatch(progress(action.procedure, action.args, action.kwargs, val, action.options));
        });
    }
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

export default function autobahnMiddlewareFactory({ connection } = {}) {
  function autobahnMiddleware({ dispatch }) {
    autobahnMiddleware._dispatch = dispatch;
    if (connection) {
      autobahnMiddleware.setConnection(connection);
      connection.open();
    }

    return next => (action) => {
      handleAction(autobahnMiddleware._connection, dispatch, next, action);
    };
  }

  /**
   * Sets the passed connection for the middleware that dispatches opened and closed connection actions and handles actions
   * @function setConnection
   * @memberof redux-autobahn:middleware
   * @param  {Connection} newConnection  the connection object
   */
  autobahnMiddleware.setConnection = (newConnection) => {
    assert(
      newConnection &&
        typeof newConnection.open === 'function' &&
        typeof newConnection.close === 'function',
      'autobahn.Connection required',
    );

    if (autobahnMiddleware._connection) {
      // close the existing connection
      autobahnMiddleware.closeConnection('newConnection', 'new connection has been set');
    }

    newConnection.onopen = (s) => {
      autobahnMiddleware._dispatch(connectionOpened(newConnection));
    };

    newConnection.onclose = (reason, details) => {
      autobahnMiddleware._dispatch(connectionClosed(reason, details));
    };

    autobahnMiddleware._connection = newConnection;
  };

  /**
   * Closes the current autobahn connection
   * @function closeConnection
   * @memberof redux-autobahn:middleware
   * @param  {string} reason  (optional) a WAMP URI providing a closing reason to the server side (e.g. 'com.myapp.close.signout'). default is `wamp.goodbye.normal`
   * @param  {string} message  human-readable closing message
   */
  autobahnMiddleware.closeConnection = (reason, message) => {
    if (isConnected(autobahnMiddleware._connection)) {
      autobahnMiddleware._connection.close(reason, message);
    }
    autobahnMiddleware._connection = null;
  };

  return autobahnMiddleware;
}
