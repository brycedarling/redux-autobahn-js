import { Connection } from 'autobahn';
import createMiddleware from './middleware';
import * as actionCreators from './actions';
import * as types from './types';

const createTestConnection = () => new Connection({
  url: 'ws://localhost:8000/',
  realm: 'realm1',
});

const createTestStore = () => {
  const actions = [];
  return {
    actions,
    dispatch: (action) => {
      actions.push(action);
    },
  };
};

const createTestSession = () => ({ id: 1, isOpen: false });

const setup = (options = {}) => {
  const connection = options.connection || createTestConnection();
  const store = options.store || createTestStore();
  const session = options.session || createTestSession();
  const middleware = createMiddleware(connection);
  const nextHandler = middleware(store);

  return {
    connection,
    store,
    session,
    middleware,
    nextHandler,
  };
};

describe('middleware', () => {
  describe('when the connection opens', () => {
    it('dispatches a CONNECTION_OPENED action with the given session', () => {
      const { connection, store, session } = setup();

      connection.onopen(session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session,
      }]);
    });
  });

  describe('when the connection closes', () => {
    it('dispatches a CONNECTION_CLOSED action', () => {
      const { connection, store, session } = setup();

      connection.onclose(session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_CLOSED,
      }]);
    });
  });

  describe('handling the OPEN_CONNECTION action', () => {
    describe('when it is already connected', () => {
      it('dispatches a CONNECTED action', () => {
        const session = { id: 1, isOpen: true };

        const { connection, store, nextHandler } = setup({ session });

        connection.onopen(session);

        nextHandler()(actionCreators.openConnection());

        expect(store.actions).toEqual([{
          type: types.CONNECTION_OPENED,
          session,
        }, {
          type: types.CONNECTED,
        }]);
      });
    });

    describe('when it is not connected', () => {
      it('calls open on the connection', () => {
        let isOpen = false;
        const connection = createTestConnection();
        connection.open = () => {
          isOpen = true;
        };

        const { nextHandler } = setup({ connection });

        nextHandler()(actionCreators.openConnection());

        expect(isOpen).toEqual(true);
      });
    });
  });

  describe('handling the CLOSE_CONNECTION action', () => {
    describe('when it is already disconnected', () => {
      it('dispatches a DISCONNECTED action', () => {
        const session = { id: 1, isOpen: false };

        const { connection, store, nextHandler } = setup({ session });

        connection.onclose(session);

        nextHandler()(actionCreators.closeConnection());

        expect(store.actions).toEqual([{
          type: types.CONNECTION_CLOSED,
        }, {
          type: types.DISCONNECTED,
        }]);
      });
    });
  });

  describe('when it is connected', () => {
    it('calls close on the connection', () => {
      let isClosed = false;
      const connection = createTestConnection();
      connection.close = () => {
        isClosed = true;
      };

      const session = { id: 1, isOpen: true };

      const { nextHandler } = setup({ connection, session });

      connection.onopen(session);

      nextHandler()(actionCreators.closeConnection());

      expect(isClosed).toEqual(true);
    });
  });
});
