/**
 * @namespace redux-autobahn:actions
 */
import * as types from './types';

/**
 * Returns a redux action with type OPEN_CONNECTION
 * @function openConnection
 * @memberof redux-autobahn:actions
 * @return {object} redux action
 */
export const openConnection = () => ({
  type: types.OPEN_CONNECTION,
});

/**
 * Returns a redux action with type CLOSE_CONNECTION
 * @function closeConnection
 * @memberof redux-autobahn:actions
 * @return {object} redux action
 */
export const closeConnection = () => ({
  type: types.CLOSE_CONNECTION,
});

/**
 * Returns a redux action with type SUBSCRIBE and the given topic
 * @function subscribe
 * @memberof redux-autobahn:actions
 * @param {string} topic - The topic being subscribed to.
 * @return {object} redux action
 */
export const subscribe = topic => ({
  type: types.SUBSCRIBE,
  topic,
});

/**
 * Returns a redux action with type UNSUBSCRIBE and the given subscription or topic
 * @function unsubscribe
 * @memberof redux-autobahn:actions
 * @param {(object|string)} subscriptionOrTopic - The subscription or topic being unsubscribed from.
 * @return {object} redux action
 */
export const unsubscribe = (subscriptionOrTopic) => {
  const action = { type: types.UNSUBSCRIBE };
  if (typeof subscriptionOrTopic === 'string') {
    action.topic = subscriptionOrTopic;
  } else {
    action.subscription = subscriptionOrTopic;
  }
  return action;
};

/**
 * Returns a redux action with type PUBLISH and the given topic, args, kwargs, and options
 * @function publish
 * @memberof redux-autobahn:actions
 * @param {string} topic - The topic being subscribed to.
 * @param {Array} args - An array of arguments.
 * @param {object} kwargs - An object of keyword arguments.
 * @param {object} options - An object of options.
 * @return {object} redux action
 */
export const publish = (topic, args, kwargs, options) => ({
  type: types.PUBLISH,
  topic,
  args,
  kwargs,
  options,
});

/**
 * Returns a redux action with type REGISTER and the given procedure, endpoint, and options
 * @function register
 * @memberof redux-autobahn:actions
 * @param {string} procedure - The procedure name being registered.
 * @param {function} endpoint - The endpoint function being registered.
 * @param {object} options - An object of options.
 * @return {object} redux action
 */
export const register = (procedure, endpoint, options) => ({
  type: types.REGISTER,
  procedure,
  endpoint,
  options,
});

/**
 * Returns a redux action with type UNREGISTER and the given registration object
 * @function unregister
 * @memberof redux-autobahn:actions
 * @param {object} registration - The registration object.
 * @return {object} redux action
 */
export const unregister = registration => ({
  type: types.UNREGISTER,
  registration,
});

/**
 * Returns a redux action with type CALL and the given procedure, args, kwargs, and options
 * @function call
 * @memberof redux-autobahn:actions
 * @param {string} procedure - The procedure name being called.
 * @param {Array} args - An array of arguments.
 * @param {object} kwargs - An object of keyword arguments.
 * @param {object} options - An object of options.
 * @param {object} resultAction - (optional) An action to be dispatched on call success.
 * @param {object} errorAction - (optional) An action to be dispatched on call error.
 * @return {object} redux action
 */
export const call = (procedure, args, kwargs, options, resultAction, errorAction,progressAction) => ({
  type: types.CALL,
  procedure,
  args,
  kwargs,
  options,
  resultAction,
  errorAction,
  progressAction
});
