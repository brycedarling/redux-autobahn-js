'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = exports.unregister = exports.register = exports.publish = exports.unsubscribe = exports.subscribe = exports.closeConnection = exports.openConnection = undefined;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var openConnection = exports.openConnection = function openConnection() {
  return {
    type: types.OPEN_CONNECTION
  };
};

var closeConnection = exports.closeConnection = function closeConnection() {
  return {
    type: types.CLOSE_CONNECTION
  };
};

var subscribe = exports.subscribe = function subscribe(topic) {
  return {
    type: types.SUBSCRIBE,
    topic: topic
  };
};

var unsubscribe = exports.unsubscribe = function unsubscribe(subscriptionOrTopic) {
  var action = { type: types.UNSUBSCRIBE };
  if (typeof subscriptionOrTopic === 'string') {
    action.topic = subscriptionOrTopic;
  } else {
    action.subscription = subscriptionOrTopic;
  }
  return action;
};

var publish = exports.publish = function publish(topic, args, kwargs, options) {
  return {
    type: types.PUBLISH,
    topic: topic,
    args: args,
    kwargs: kwargs,
    options: options
  };
};

var register = exports.register = function register(procedure, endpoint, options) {
  return {
    type: types.REGISTER,
    procedure: procedure,
    endpoint: endpoint,
    options: options
  };
};

var unregister = exports.unregister = function unregister(registration) {
  return {
    type: types.UNREGISTER,
    registration: registration
  };
};

var call = exports.call = function call(procedure, args, kwargs, options) {
  return {
    type: types.CALL,
    procedure: procedure,
    args: args,
    kwargs: kwargs,
    options: options
  };
};