import * as actions from './actions';
import * as types from './types';

function expectActionType(action, type) {
  expect(action.type).toEqual(type);
}

describe('actions', () => {
  describe('openConnection', () => {
    it('returns an OPEN_CONNECTION action', () => {
      expectActionType(actions.openConnection(), types.OPEN_CONNECTION);
    });
  });

  describe('closeConnection', () => {
    it('returns a CLOSE_CONNECTION action', () => {
      expectActionType(actions.closeConnection(), types.CLOSE_CONNECTION);
    });
  });

  describe('subscribe', () => {
    describe('when given a topic', () => {
      it('returns a SUBSCRIBE action with the given topic', () => {
        const topic = 'ticker';
        const action = actions.subscribe(topic);
        expectActionType(action, types.SUBSCRIBE);
        expect(action.topic).toEqual(topic);
      });
    });
  });

  describe('unsubscribe', () => {
    describe('when given a subscription', () => {
      it('returns an UNSUBSCRIBE action with the given subscription', () => {
        const subscription = { id: 1 };
        const action = actions.unsubscribe(subscription);
        expectActionType(action, types.UNSUBSCRIBE);
        expect(action.subscription).toEqual(subscription);
      });
    });

    describe('when given a topic', () => {
      it('returns an UNSUBSCRIBE action with the given topic', () => {
        const topic = 'ticker';
        const action = actions.unsubscribe(topic);
        expectActionType(action, types.UNSUBSCRIBE);
        expect(action.topic).toEqual(topic);
      });
    });
  });

  describe('publish', () => {
    describe('when given a topic, args, kwargs, and options', () => {
      it('returns a PUBLISH action with the given topic, args, kwargs, and options', () => {
        const topic = 'ticker';
        const args = [1, 2, 3];
        const kwargs = { kwarg: 'kwarg' };
        const options = { option: 'option' };
        const action = actions.publish(topic, args, kwargs, options);
        expectActionType(action, types.PUBLISH);
        expect(action.topic).toEqual(topic);
        expect(action.args).toEqual(args);
        expect(action.kwargs).toEqual(kwargs);
        expect(action.options).toEqual(options);
      });
    });
  });

  describe('register', () => {
    describe('when given a procedure, endpoint, and options', () => {
      it('returns a REGISTER action with the given procedure, endpoint, and options', () => {
        const procedure = 'rpc';
        const endpoint = () => {};
        const options = { option: 'option' };
        const action = actions.register(procedure, endpoint, options);
        expectActionType(action, types.REGISTER);
        expect(action.procedure).toEqual(procedure);
        expect(action.endpoint).toEqual(endpoint);
        expect(action.options).toEqual(options);
      });
    });
  });

  describe('unregister', () => {
    describe('when given a registration', () => {
      it('returns an UNREGISTER action with the given registration', () => {
        const registration = { id: 1 };
        const action = actions.unregister(registration);
        expectActionType(action, types.UNREGISTER);
        expect(action.registration).toEqual(registration);
      });
    });
  });

  describe('call', () => {
    describe('when given a procedure, args, kwargs, and options', () => {
      it('returns a CALL action with the given procedure, args, kwargs, and options', () => {
        const procedure = 'rpc';
        const args = [1, 2, 3];
        const kwargs = { kwarg: 'kwarg' };
        const options = { option: 'option' };
        const action = actions.call(procedure, args, kwargs, options);
        expectActionType(action, types.CALL);
        expect(action.procedure).toEqual(procedure);
        expect(action.args).toEqual(args);
        expect(action.kwargs).toEqual(kwargs);
        expect(action.options).toEqual(options);
      });
    });
  });
});
