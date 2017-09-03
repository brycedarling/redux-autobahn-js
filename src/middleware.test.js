import { Connection } from 'autobahn';
import createMiddleware from './middleware';
import * as actionCreators from './actions';
import * as types from './types';

describe('middleware', () => {
  describe('when the connection opens', () => {
    it('dispatches a CONNECTION_OPENED action with the given session', () => {
      const connection = new Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1',
      });
      const middleware = createMiddleware(connection);
      const actions = [];
      const store = {
        dispatch: (action) => {
          actions.push(action);
        },
      };
      middleware(store);
      const session = { id: 1, isOpen: true };
      connection.onopen(session);
      expect(actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session,
      }]);
    });
  });

  describe('when the connection closes', () => {
    it('dispatches a CONNECTION_CLOSED action', () => {
      const connection = new Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1',
      });
      const middleware = createMiddleware(connection);
      const actions = [];
      const store = {
        dispatch: (action) => {
          actions.push(action);
        },
      };
      middleware(store);
      connection.onclose();
      expect(actions).toEqual([{
        type: types.CONNECTION_CLOSED,
      }]);
    });
  });

  describe('when handling the OPEN_CONNECTION action', () => {
    it('dispatches connected if it is already connected', () => {
      const connection = new Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1',
      });
      const middleware = createMiddleware(connection);
      const actions = [];
      const store = {
        dispatch: (action) => {
          actions.push(action);
        },
      };
      const f = middleware(store);
      const session = { id: 1, isOpen: true };
      connection.onopen(session);
      const action = actionCreators.openConnection();
      f(undefined)(action);
      expect(actions).toEqual([{
        type: types.CONNECTION_OPENED,
        session,
      }, {
        type: types.CONNECTED,
      }]);
    });

    it('calls open on the connection', () => {
      const connection = new Connection({
        url: 'ws://localhost:8000/',
        realm: 'realm1',
      });
      let isOpen = false;
      connection.open = () => {
        isOpen = true;
      };
      const middleware = createMiddleware(connection);
      const actions = [];
      const store = {
        dispatch: (action) => {
          actions.push(action);
        },
      };
      const f = middleware(store);
      const session = { id: 1, isOpen: false };
      connection.onopen(session);
      const action = actionCreators.openConnection();
      f(undefined)(action);
      expect(isOpen).toEqual(true);
    });
  });
});
