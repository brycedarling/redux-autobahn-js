'use strict';

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function expectActionType(action, type) {
  expect(action.type).toEqual(type);
}

describe('actions', function () {
  describe('openConnection', function () {
    it('returns an OPEN_CONNECTION action', function () {
      expectActionType(actions.openConnection(), types.OPEN_CONNECTION);
    });
  });

  describe('closeConnection', function () {
    it('returns a CLOSE_CONNECTION action', function () {
      expectActionType(actions.closeConnection(), types.CLOSE_CONNECTION);
    });
  });

  describe('subscribe', function () {
    describe('when given a topic', function () {
      it('returns a SUBSCRIBE action with the given topic', function () {
        var topic = 'ticker';
        var action = actions.subscribe(topic);
        expectActionType(action, types.SUBSCRIBE);
        expect(action.topic).toEqual(topic);
      });
    });
  });

  describe('unsubscribe', function () {
    describe('when given a subscription', function () {
      it('returns an UNSUBSCRIBE action with the given subscription', function () {
        var subscription = { id: 1 };
        var action = actions.unsubscribe(subscription);
        expectActionType(action, types.UNSUBSCRIBE);
        expect(action.subscription).toEqual(subscription);
      });
    });

    describe('when given a topic', function () {
      it('returns an UNSUBSCRIBE action with the given topic', function () {
        var topic = 'ticker';
        var action = actions.unsubscribe(topic);
        expectActionType(action, types.UNSUBSCRIBE);
        expect(action.topic).toEqual(topic);
      });
    });
  });

  describe('publish', function () {
    describe('when given a topic, args, kwargs, and options', function () {
      it('returns a PUBLISH action with the given topic, args, kwargs, and options', function () {
        var topic = 'ticker';
        var args = [1, 2, 3];
        var kwargs = { kwarg: 'kwarg' };
        var options = { option: 'option' };
        var action = actions.publish(topic, args, kwargs, options);
        expectActionType(action, types.PUBLISH);
        expect(action.topic).toEqual(topic);
        expect(action.args).toEqual(args);
        expect(action.kwargs).toEqual(kwargs);
        expect(action.options).toEqual(options);
      });
    });
  });

  describe('register', function () {
    describe('when given a procedure, endpoint, and options', function () {
      it('returns a REGISTER action with the given procedure, endpoint, and options', function () {
        var procedure = 'rpc';
        var endpoint = function endpoint() {};
        var options = { option: 'option' };
        var action = actions.register(procedure, endpoint, options);
        expectActionType(action, types.REGISTER);
        expect(action.procedure).toEqual(procedure);
        expect(action.endpoint).toEqual(endpoint);
        expect(action.options).toEqual(options);
      });
    });
  });

  describe('unregister', function () {
    describe('when given a registration', function () {
      it('returns an UNREGISTER action with the given registration', function () {
        var registration = { id: 1 };
        var action = actions.unregister(registration);
        expectActionType(action, types.UNREGISTER);
        expect(action.registration).toEqual(registration);
      });
    });
  });

  describe('call', function () {
    describe('when given a procedure, args, kwargs, and options', function () {
      it('returns a CALL action with the given procedure, args, kwargs, and options', function () {
        var procedure = 'rpc';
        var args = [1, 2, 3];
        var kwargs = { kwarg: 'kwarg' };
        var options = { option: 'option' };
        var action = actions.call(procedure, args, kwargs, options);
        expectActionType(action, types.CALL);
        expect(action.procedure).toEqual(procedure);
        expect(action.args).toEqual(args);
        expect(action.kwargs).toEqual(kwargs);
        expect(action.options).toEqual(options);
      });
    });
  });
});