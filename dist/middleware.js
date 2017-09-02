'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _autobahn = require('autobahn');

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var connected = function connected() {
  return {
    type: types.CONNECTED
  };
};

var disconnected = function disconnected() {
  return {
    type: types.DISCONNECTED
  };
};

var connectionOpened = function connectionOpened(session) {
  return {
    type: types.CONNECTION_OPENED,
    session: session
  };
};

var connectionClosed = function connectionClosed() {
  return {
    type: types.CONNECTION_CLOSED
  };
};

var subscribed = function subscribed(subscription) {
  return {
    type: types.SUBSCRIBED,
    topic: subscription.topic,
    subscription: subscription
  };
};

var subscribeError = function subscribeError(error) {
  return {
    type: types.SUBSCRIBE_ERROR,
    error: error
  };
};

var unsubscribed = function unsubscribed(subscription) {
  return {
    type: types.UNSUBSCRIBED,
    topic: subscription.topic,
    subscription: subscription
  };
};

var unsubscribeError = function unsubscribeError(error) {
  return {
    type: types.UNSUBSCRIBE_ERROR,
    error: error
  };
};

var published = function published(publication, topic, args, kwargs, options) {
  return {
    type: types.PUBLISHED,
    publication: publication,
    topic: topic,
    args: args,
    kwargs: kwargs,
    options: options
  };
};

var publishError = function publishError(error) {
  return {
    type: types.PUBLISH_ERROR,
    error: error
  };
};

var event = function event(topic, args, kwargs, details) {
  return {
    type: types.EVENT,
    topic: topic,
    args: args,
    kwargs: kwargs,
    details: details
  };
};

var registered = function registered(registration) {
  return {
    type: types.REGISTERED,
    registration: registration
  };
};

var registerError = function registerError(error) {
  return {
    type: types.REGISTER_ERROR,
    error: error
  };
};

var unregistered = function unregistered(registration) {
  return {
    type: types.UNREGISTERED,
    registration: registration
  };
};

var unregisterError = function unregisterError(error) {
  return {
    type: types.UNREGISTER_ERROR,
    error: error
  };
};

var callError = function callError(error) {
  return {
    type: types.CALL_ERROR,
    error: error
  };
};

var result = function result(value) {
  return {
    type: types.RESULT,
    result: value
  };
};

var isConnected = function isConnected(session) {
  return session && session.isOpen;
};

var getSubscription = function getSubscription(action) {
  return action.subscription;
};

var handleAction = function handleAction(connection, session, dispatch, next, action) {
  switch (action.type) {
    case types.OPEN_CONNECTION:
      return !isConnected(session) ? dispatch(connected()) : connection.open();

    case types.CLOSE_CONNECTION:
      return !isConnected(session) ? dispatch(disconnected()) : connection.close();

    case types.SUBSCRIBE:
      return !isConnected(session) ? dispatch(disconnected()) : session.subscribe(action.topic, function (args, kwargs, details) {
        dispatch(event(action.topic, args, kwargs, details));
      }).then(function (subscription) {
        dispatch(subscribed(subscription));
      }, function (err) {
        dispatch(subscribeError(err));
      });

    case types.UNSUBSCRIBE:
      return !isConnected(session) ? dispatch(disconnected()) : session.unsubscribe(getSubscription(action)).then(function (success) {
        if (success) dispatch(unsubscribed(action.subscription));else unsubscribeError('Failed to unsubscribe');
      }, function (err) {
        dispatch(unsubscribeError(err));
      });

    case types.PUBLISH:
      return !isConnected(session) ? dispatch(disconnected()) : session.publish(action.topic, action.args, action.kwargs, _extends({}, action.options, { acknowledge: true })).then(function (pub) {
        dispatch(published(pub, action.topic, action.args, action.kwargs, action.options));
      }, function (err) {
        dispatch(publishError(err));
      });

    case types.REGISTER:
      return !isConnected(session) ? dispatch(disconnected()) : session.register(action.procedure, action.endpoint, action.options).then(function (reg) {
        dispatch(registered(reg));
      }, function (err) {
        dispatch(registerError(err));
      });

    case types.UNREGISTER:
      return !isConnected(session) ? dispatch(disconnected()) : session.unregister(action.registration).then(function () {
        dispatch(unregistered(action.registration));
      }, function (err) {
        dispatch(unregisterError(err));
      });

    case types.CALL:
      return !isConnected(session) ? dispatch(disconnected()) : session.call(action.procedure, action.args, action.kwargs, action.options).then(function (res) {
        dispatch(result(res));
      }, function (err) {
        dispatch(callError(err));
      });

    default:
      return next(action);
  }
};

var assert = function assert(assertion, message) {
  if (!assertion) {
    throw new Error(message);
  }
};

var createMiddleware = function createMiddleware(connection) {
  assert(connection instanceof _autobahn.Connection, 'autobahn.Connection required');

  return function (_ref) {
    var dispatch = _ref.dispatch;

    var session = null;

    /* eslint-disable no-param-reassign */
    connection.onopen = function (s) {
      session = s;

      dispatch(connectionOpened(session));
    };

    connection.onclose = function () {
      session = null;

      dispatch(connectionClosed());
    };

    return function (next) {
      return function (action) {
        return handleAction(connection, session, dispatch, next, action);
      };
    };
  };
};

exports.default = createMiddleware;