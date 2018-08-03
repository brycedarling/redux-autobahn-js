import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import reduxAutobahn from 'redux-autobahn-js';

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const autobahnMiddleware = reduxAutobahn.middleware();

const composedEnhancers = compose(
  applyMiddleware(thunk, autobahnMiddleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.setAutobahnConnection = autobahnMiddleware.setConnection;
store.closeAutobahnConnection = autobahnMiddleware.closeConnection;

export default store;
