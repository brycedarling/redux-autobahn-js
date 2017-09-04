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

var createTestConnection = function createTestConnection() {
  return new _autobahn.Connection({
    url: 'ws://localhost:8000/',
    realm: 'realm1'
  });
};

var createTestStore = function createTestStore() {
  var actions = [];
  return {
    actions: actions,
    dispatch: function dispatch(action) {
      actions.push(action);
    }
  };
};

var createTestSession = function createTestSession() {
  return { id: 1, isOpen: false };
};

var setup = function setup() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var connection = options.connection || createTestConnection();
  var store = options.store || createTestStore();
  var session = options.session || createTestSession();
  var middleware = (0, _middleware2.default)(connection);
  var nextHandler = middleware(store);

  return {
    connection: connection,
    store: store,
    session: session,
    middleware: middleware,
    nextHandler: nextHandler
  };
};

describe('middleware', function () {
  it('throws an error when it is not given an autobahn.Connection', function () {
    expect(function () {
      return (0, _middleware2.default)();
    }).toThrow('autobahn.Connection required');
  });

  describe('when the connection opens', function () {
    it('dispatches a CONNECTION_OPENED action with the given session', function () {
      var _setup = setup(),
          connection = _setup.connection,
          store = _setup.store,
          session = _setup.session;

      connection.onopen(session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session: session
      }]);
    });
  });

  describe('when the connection closes', function () {
    it('dispatches a CONNECTION_CLOSED action', function () {
      var _setup2 = setup(),
          connection = _setup2.connection,
          store = _setup2.store,
          session = _setup2.session;

      connection.onclose(session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_CLOSED
      }]);
    });
  });

  describe('handling the OPEN_CONNECTION action', function () {
    describe('when it is already connected', function () {
      it('dispatches a CONNECTED action', function () {
        var session = { id: 1, isOpen: true };

        var _setup3 = setup({ session: session }),
            connection = _setup3.connection,
            store = _setup3.store,
            nextHandler = _setup3.nextHandler;

        connection.onopen(session);

        nextHandler()(actionCreators.openConnection());

        expect(store.actions).toEqual([{
          type: types.CONNECTION_OPENED,
          session: session
        }, {
          type: types.CONNECTED
        }]);
      });
    });

    describe('when it is not connected', function () {
      it('calls open on the connection', function () {
        var isOpen = false;
        var connection = createTestConnection();
        connection.open = function () {
          isOpen = true;
        };

        var _setup4 = setup({ connection: connection }),
            nextHandler = _setup4.nextHandler;

        nextHandler()(actionCreators.openConnection());

        expect(isOpen).toEqual(true);
      });
    });
  });

  describe('handling the CLOSE_CONNECTION action', function () {
    describe('when it is already disconnected', function () {
      it('dispatches a DISCONNECTED action', function () {
        var session = { id: 1, isOpen: false };

        var _setup5 = setup({ session: session }),
            connection = _setup5.connection,
            store = _setup5.store,
            nextHandler = _setup5.nextHandler;

        connection.onclose(session);

        nextHandler()(actionCreators.closeConnection());

        expect(store.actions).toEqual([{
          type: types.CONNECTION_CLOSED
        }, {
          type: types.DISCONNECTED
        }]);
      });
    });
  });

  describe('when it is connected', function () {
    it('calls close on the connection', function () {
      var isClosed = false;
      var connection = createTestConnection();
      connection.close = function () {
        isClosed = true;
      };

      var session = { id: 1, isOpen: true };

      var _setup6 = setup({ connection: connection, session: session }),
          nextHandler = _setup6.nextHandler;

      connection.onopen(session);

      nextHandler()(actionCreators.closeConnection());

      expect(isClosed).toEqual(true);
    });
  });
});