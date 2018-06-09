import _ from 'lodash';
import { Connection } from 'autobahn';
import createMiddleware from './middleware';
import * as actionCreators from './actions';
import * as types from './types';

const createTestConnection = ({ session, isOpen } = {}) => {
  const conn = new Connection({
    url: 'ws://localhost:8000/',
    realm: 'realm1',
  });
  let _session = session || createTestSession();
  Object.defineProperty(conn, 'session', {
    get: () => _session,
    set: (session) => {
      _session = session;
    },
  });
  let _isOpen = isOpen || false;
  Object.defineProperty(conn, 'isOpen', {
    get: () => _isOpen,
    set: (isOpen) => {
      _isOpen = isOpen;
    },
  });
  return conn;
}

const createTestStore = () => {
  const actions = [];
  return {
    actions,
    next: (action) => {},
    dispatch: (action) => {
      actions.push(action);
    },
  };
};

const createTestSession = () => ({ id: 1, isOpen: false });

const setup = (options = {}) => {
  const connection = options.connection || createTestConnection();
  const store = options.store || createTestStore();
  const middleware = createMiddleware({ connection });
  const nextHandler = middleware(store);

  return {
    connection,
    store,
    middleware,
    nextHandler,
  };
};

describe('middleware', () => {
  it('returns middleware when it is not given an autobahn.Connection', () => {
    expect(() => createMiddleware()).toBeInstanceOf(Function);
  });

  describe('when the connection opens', () => {
    it('dispatches a CONNECTION_OPENED action with the given session', () => {
      const { connection, store } = setup();

      connection.onopen(connection.session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session: connection.session,
      }]);
    });
  });

  describe('when the connection closes', () => {
    it('dispatches a CONNECTION_CLOSED action', () => {
      const { connection, store } = setup();

      connection.onclose(connection.session);

      expect(store.actions).toEqual([{
        type: types.CONNECTION_CLOSED,
      }]);
    });
  });

  describe('handling the OPEN_CONNECTION action', () => {
    describe('when it is already connected', () => {
      it('dispatches a CONNECTED action', () => {
        const session = { id: 1, isOpen: true };

        const { connection, store, nextHandler } = setup({
          connection: createTestConnection({ session, isOpen: true }),
        });

        connection.onopen(connection.session);

        nextHandler()(actionCreators.openConnection());

        expect(store.actions).toEqual([{
          type: types.CONNECTION_OPENED,
          session: connection.session,
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

        const { connection, store, nextHandler } = setup({
          connection: createTestConnection({ session, isOpen: false }),
        });

        connection.onclose(connection.session);

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
      const session = { id: 1, isOpen: true };

      const { connection, nextHandler } = setup({
        connection: createTestConnection({ session, isOpen: true })
      });
      connection.close = () => {
        connection.isOpen = false;
      };

      connection.onopen(connection.session);

      nextHandler()(actionCreators.closeConnection());

      expect(connection.isOpen).toEqual(false);
    });
  });
});
