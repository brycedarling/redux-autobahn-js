'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = exports.unregister = exports.register = exports.publish = exports.unsubscribe = exports.subscribe = exports.closeConnection = exports.openConnection = undefined;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a redux action with type OPEN_CONNECTION
 * @function openConnection
 * @memberof redux-autobahn:actions
 * @return {object} redux action
 */
var openConnection = exports.openConnection = function openConnection() {
  return {
    type: types.OPEN_CONNECTION
  };
};

/**
 * Returns a redux action with type CLOSE_CONNECTION
 * @function closeConnection
 * @memberof redux-autobahn:actions
 * @return {object} redux action
 */
/**
 * @namespace redux-autobahn:actions
 */
var closeConnection = exports.closeConnection = function closeConnection() {
  return {
    type: types.CLOSE_CONNECTION
  };
};

/**
 * Returns a redux action with type SUBSCRIBE and the given topic
 * @function subscribe
 * @memberof redux-autobahn:actions
 * @param {string} topic - The topic being subscribed to.
 * @return {object} redux action
 */
var subscribe = exports.subscribe = function subscribe(topic) {
  return {
    type: types.SUBSCRIBE,
    topic: topic
  };
};

/**
 * Returns a redux action with type UNSUBSCRIBE and the given subscription or topic
 * @function unsubscribe
 * @memberof redux-autobahn:actions
 * @param {(object|string)} subscriptionOrTopic - The subscription or topic being unsubscribed from.
 * @return {object} redux action
 */
var unsubscribe = exports.unsubscribe = function unsubscribe(subscriptionOrTopic) {
  var action = { type: types.UNSUBSCRIBE };
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
var publish = exports.publish = function publish(topic, args, kwargs, options) {
  return {
    type: types.PUBLISH,
    topic: topic,
    args: args,
    kwargs: kwargs,
    options: options
  };
};

/**
 * Returns a redux action with type REGISTER and the given procedure, endpoint, and options
 * @function register
 * @memberof redux-autobahn:actions
 * @param {string} procedure - The procedure name being registered.
 * @param {function} endpoint - The endpoint function being registered.
 * @param {object} options - An object of options.
 * @return {object} redux action
 */
var register = exports.register = function register(procedure, endpoint, options) {
  return {
    type: types.REGISTER,
    procedure: procedure,
    endpoint: endpoint,
    options: options
  };
};

/**
 * Returns a redux action with type UNREGISTER and the given registration object
 * @function unregister
 * @memberof redux-autobahn:actions
 * @param {object} registration - The registration object.
 * @return {object} redux action
 */
var unregister = exports.unregister = function unregister(registration) {
  return {
    type: types.UNREGISTER,
    registration: registration
  };
};

/**
 * Returns a redux action with type CALL and the given procedure, args, kwargs, and options
 * @function call
 * @memberof redux-autobahn:actions
 * @param {string} procedure - The procedure name being called.
 * @param {Array} args - An array of arguments.
 * @param {object} kwargs - An object of keyword arguments.
 * @param {object} options - An object of options.
 * @return {object} redux action
 */
var call = exports.call = function call(procedure, args, kwargs, options) {
  return {
    type: types.CALL,
    procedure: procedure,
    args: args,
    kwargs: kwargs,
    options: options
  };
};