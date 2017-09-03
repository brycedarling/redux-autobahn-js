'use strict';

var _autobahn = require('autobahn');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _actions = require('./actions');

var actionCreators = _interopRequireWildcard(_actions);

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middleware', function () {
  describe('when the connection opens', function () {
    it('dispatches a CONNECTION_OPENED action with the given session', function () {
      var connection = new _autobahn.Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1'
      });
      var middleware = (0, _middleware2.default)(connection);
      var actions = [];
      var store = {
        dispatch: function dispatch(action) {
          actions.push(action);
        }
      };
      middleware(store);
      var session = { id: 1, isOpen: true };
      connection.onopen(session);
      expect(actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session: session
      }]);
    });
  });

  describe('when the connection closes', function () {
    it('dispatches a CONNECTION_CLOSED action', function () {
      var connection = new _autobahn.Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1'
      });
      var middleware = (0, _middleware2.default)(connection);
      var actions = [];
      var store = {
        dispatch: function dispatch(action) {
          actions.push(action);
        }
      };
      middleware(store);
      connection.onclose();
      expect(actions).toEqual([{
        type: types.CONNECTION_CLOSED
      }]);
    });
  });

  describe('when handling the OPEN_CONNECTION action', function () {
    it('dispatches connected if it is already connected', function () {
      var connection = new _autobahn.Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1'
      });
      var middleware = (0, _middleware2.default)(connection);
      var actions = [];
      var store = {
        dispatch: function dispatch(action) {
          actions.push(action);
        }
      };
      var f = middleware(store);
      var session = { id: 1, isOpen: true };
      connection.onopen(session);
      var action = actionCreators.openConnection();
      f(undefined)(action);
      expect(actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session: session
      }, {
        type: types.CONNECTED
      }]);
    });

    it('calls open on the connection', function () {
      var connection = new _autobahn.Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1'
      });
      var isOpen = false;
      connection.open = function () {
        isOpen = true;
      };
      var middleware = (0, _middleware2.default)(connection);
      var actions = [];
      var store = {
        dispatch: function dispatch(action) {
          actions.push(action);
        }
      };
      var f = middleware(store);
      var session = { id: 1, isOpen: false };
      connection.onopen(session);
      var action = actionCreators.openConnection();
      f(undefined)(action);
      expect(isOpen).toEqual(true);
    });
  });
});