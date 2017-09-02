'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialState = function getInitialState() {
  return {
    connection: { isConnected: false, isOpen: false },
    session: { id: null, isOpen: false },
    subscriptions: [],
    registrations: []
  };
};

var getConnectionOpenedState = function getConnectionOpenedState() {
  return {
    connection: {
      isConnected: true,
      isOpen: true
    },
    session: {
      id: 1,
      isOpen: true
    },
    subscriptions: [],
    registrations: []
  };
};

describe('reducer', function () {
  describe('connection', function () {
    it('defaults isConnected and isOpen to false', function () {
      var previousState = undefined;
      var action = {};
      var expectedState = _extends({}, getInitialState(), {
        connection: {
          isConnected: false,
          isOpen: false
        }
      });
      expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
    });

    describe('when action is CONNECTION_OPENED', function () {
      it('sets connection isConnected and isOpen to true', function () {
        var previousState = {
          connection: {
            isConnected: false,
            isOpen: false
          }
        };
        var action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 }
        };
        var expectedState = getConnectionOpenedState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', function () {
      it('sets connection isConnected and isOpen to false', function () {
        var previousState = {
          connection: {
            isConnected: true,
            isOpen: true
          }
        };
        var action = {
          type: types.CONNECTION_CLOSED
        };
        var expectedState = getInitialState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('session', function () {
    it('defaults session id to null and isOpen to false', function () {
      var previousState = undefined;
      var action = {};
      var expectedState = _extends({}, getInitialState(), {
        session: {
          id: null,
          isOpen: false
        }
      });
      expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
    });

    describe('when action is CONNECTION_OPENED', function () {
      it('sets session id to action session id and isOpen to true', function () {
        var previousState = {
          session: {
            id: null,
            isOpen: false
          }
        };
        var action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 }
        };
        var expectedState = getConnectionOpenedState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', function () {
      it('sets session id to null and isOpen to false', function () {
        var previousState = {
          session: {
            id: 1,
            isOpen: true
          }
        };
        var action = {
          type: types.CONNECTION_CLOSED
        };
        var expectedState = getInitialState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('subscriptions', function () {
    describe('when action is SUBSCRIBED', function () {
      it('adds the given subscription ', function () {
        var previousState = {
          subscriptions: [{ id: 1 }]
        };
        var action = {
          type: types.SUBSCRIBED,
          subscription: { id: 2 }
        };
        var expectedState = _extends({}, getInitialState(), {
          subscriptions: [{ id: 1 }, { id: 2 }]
        });
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is UNSUBSCRIBED', function () {
      it('removes the given subscription by id', function () {
        var previousState = {
          subscriptions: [{ id: 1 }, { id: 2 }, { id: 3 }]
        };
        var action = {
          type: types.UNSUBSCRIBED,
          subscription: { id: 2 }
        };
        var expectedState = _extends({}, getInitialState(), {
          subscriptions: [{ id: 1 }, { id: 3 }]
        });
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when it receives CONNECTION_OPENED', function () {
      it('resets subscriptions to an empty array', function () {
        var previousState = {
          subscriptions: [{ id: 1 }]
        };
        var action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 }
        };
        var expectedState = getConnectionOpenedState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when it receives CONNECTION_CLOSED', function () {
      it('resets subscriptions to an empty array', function () {
        var previousState = {
          subscriptions: [{ id: 1 }]
        };
        var action = {
          type: types.CONNECTION_CLOSED
        };
        var expectedState = getInitialState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('registrations', function () {
    describe('when action is REGISTERED', function () {
      it('adds the given registration ', function () {
        var previousState = {
          registrations: [{ id: 1 }]
        };
        var action = {
          type: types.REGISTERED,
          registration: { id: 2 }
        };
        var expectedState = _extends({}, getInitialState(), {
          registrations: [{ id: 1 }, { id: 2 }]
        });
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is UNREGISTERED', function () {
      it('removes the given registration by id', function () {
        var previousState = {
          registrations: [{ id: 1 }, { id: 2 }, { id: 3 }]
        };
        var action = {
          type: types.UNREGISTERED,
          registration: { id: 2 }
        };
        var expectedState = _extends({}, getInitialState(), {
          registrations: [{ id: 1 }, { id: 3 }]
        });
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_OPENED', function () {
      it('resets registrations to an empty array', function () {
        var previousState = {
          registrations: [{ id: 1 }]
        };
        var action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 }
        };
        var expectedState = getConnectionOpenedState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', function () {
      it('resets registrations to an empty array', function () {
        var previousState = {
          registrations: [{ id: 1 }]
        };
        var action = {
          type: types.CONNECTION_CLOSED
        };
        var expectedState = getInitialState();
        expect((0, _reducer2.default)(previousState, action)).toEqual(expectedState);
      });
    });
  });
});