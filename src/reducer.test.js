import reducer from './reducer';
import * as types from './types';

const getInitialState = () => ({
  connection: { isConnected: false, isOpen: false },
  session: { id: null, isOpen: false },
  subscriptions: [],
  registrations: [],
});

const getConnectionOpenedState = () => ({
  connection: {
    isConnected: true,
    isOpen: true,
  },
  session: {
    id: 1,
    isOpen: true,
  },
  subscriptions: [],
  registrations: [],
});

describe('reducer', () => {
  describe('connection', () => {
    it('defaults isConnected and isOpen to false', () => {
      const previousState = undefined;
      const action = {};
      const expectedState = {
        ...getInitialState(),
        connection: {
          isConnected: false,
          isOpen: false,
        },
      };
      expect(reducer(previousState, action)).toEqual(expectedState);
    });

    describe('when action is CONNECTION_OPENED', () => {
      it('sets connection isConnected and isOpen to true', () => {
        const previousState = {
          connection: {
            isConnected: false,
            isOpen: false,
          },
        };
        const action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 },
        };
        const expectedState = getConnectionOpenedState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', () => {
      it('sets connection isConnected and isOpen to false', () => {
        const previousState = {
          connection: {
            isConnected: true,
            isOpen: true,
          },
        };
        const action = {
          type: types.CONNECTION_CLOSED,
        };
        const expectedState = getInitialState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('session', () => {
    it('defaults session id to null and isOpen to false', () => {
      const previousState = undefined;
      const action = {};
      const expectedState = {
        ...getInitialState(),
        session: {
          id: null,
          isOpen: false,
        },
      };
      expect(reducer(previousState, action)).toEqual(expectedState);
    });

    describe('when action is CONNECTION_OPENED', () => {
      it('sets session id to action session id and isOpen to true', () => {
        const previousState = {
          session: {
            id: null,
            isOpen: false,
          },
        };
        const action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 },
        };
        const expectedState = getConnectionOpenedState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', () => {
      it('sets session id to null and isOpen to false', () => {
        const previousState = {
          session: {
            id: 1,
            isOpen: true,
          },
        };
        const action = {
          type: types.CONNECTION_CLOSED,
        };
        const expectedState = getInitialState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('subscriptions', () => {
    describe('when action is SUBSCRIBED', () => {
      it('adds the given subscription ', () => {
        const previousState = {
          subscriptions: [{ id: 1 }],
        };
        const action = {
          type: types.SUBSCRIBED,
          subscription: { id: 2 },
        };
        const expectedState = {
          ...getInitialState(),
          subscriptions: [{ id: 1 }, { id: 2 }],
        };
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is UNSUBSCRIBED', () => {
      it('removes the given subscription by id', () => {
        const previousState = {
          subscriptions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const action = {
          type: types.UNSUBSCRIBED,
          subscription: { id: 2 },
        };
        const expectedState = {
          ...getInitialState(),
          subscriptions: [{ id: 1 }, { id: 3 }],
        };
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when it receives CONNECTION_OPENED', () => {
      it('resets subscriptions to an empty array', () => {
        const previousState = {
          subscriptions: [{ id: 1 }],
        };
        const action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 },
        };
        const expectedState = getConnectionOpenedState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when it receives CONNECTION_CLOSED', () => {
      it('resets subscriptions to an empty array', () => {
        const previousState = {
          subscriptions: [{ id: 1 }],
        };
        const action = {
          type: types.CONNECTION_CLOSED,
        };
        const expectedState = getInitialState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });
  });

  describe('registrations', () => {
    describe('when action is REGISTERED', () => {
      it('adds the given registration ', () => {
        const previousState = {
          registrations: [{ id: 1 }],
        };
        const action = {
          type: types.REGISTERED,
          registration: { id: 2 },
        };
        const expectedState = {
          ...getInitialState(),
          registrations: [{ id: 1 }, { id: 2 }],
        };
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is UNREGISTERED', () => {
      it('removes the given registration by id', () => {
        const previousState = {
          registrations: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const action = {
          type: types.UNREGISTERED,
          registration: { id: 2 },
        };
        const expectedState = {
          ...getInitialState(),
          registrations: [{ id: 1 }, { id: 3 }],
        };
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_OPENED', () => {
      it('resets registrations to an empty array', () => {
        const previousState = {
          registrations: [{ id: 1 }],
        };
        const action = {
          type: types.CONNECTION_OPENED,
          session: { id: 1 },
        };
        const expectedState = getConnectionOpenedState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });

    describe('when action is CONNECTION_CLOSED', () => {
      it('resets registrations to an empty array', () => {
        const previousState = {
          registrations: [{ id: 1 }],
        };
        const action = {
          type: types.CONNECTION_CLOSED,
        };
        const expectedState = getInitialState();
        expect(reducer(previousState, action)).toEqual(expectedState);
      });
    });
  });
});
