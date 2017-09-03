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

  describe('when handling the OPEN_CONNECTION action', () => {
    it('dispatches connected if it is already connected', () => {
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
