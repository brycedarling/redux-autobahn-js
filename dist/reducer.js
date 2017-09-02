'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var connection = function connection() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isConnected: false, isOpen: false };
  var action = arguments[1];

  switch (action.type) {
    case types.CONNECTION_OPENED:
      return _extends({}, state, {
        isConnected: true,
        isOpen: true
      });

    case types.CONNECTION_CLOSED:
      return _extends({}, state, {
        isConnected: false,
        isOpen: false
      });

    default:
      return state;
  }
};

var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: null, isOpen: false };
  var action = arguments[1];

  switch (action.type) {
    case types.CONNECTION_OPENED:
      return _extends({}, state, {
        id: action.session.id,
        isOpen: true
      });

    case types.CONNECTION_CLOSED:
      return _extends({}, state, {
        id: null,
        isOpen: false
      });

    default:
      return state;
  }
};

var subscriptions = function subscriptions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case types.SUBSCRIBED:
      return [].concat(_toConsumableArray(state), [action.subscription]);

    case types.UNSUBSCRIBED:
      return state.filter(function (subscription) {
        return subscription.id !== action.subscription.id;
      });

    case types.CONNECTION_OPENED:
    case types.CONNECTION_CLOSED:
      return [];

    default:
      return state;
  }
};

var registrations = function registrations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case types.REGISTERED:
      return [].concat(_toConsumableArray(state), [action.registration]);

    case types.UNREGISTERED:
      return state.filter(function (registration) {
        return registration.id !== action.registration.id;
      });

    case types.CONNECTION_OPENED:
    case types.CONNECTION_CLOSED:
      return [];

    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  connection: connection,
  session: session,
  subscriptions: subscriptions,
  registrations: registrations
});