/**
 * @namespace redux-autobahn:reducer
 */
import { combineReducers } from 'redux';
import * as types from './types';

/**
 * @function connection
 * @memberof redux-autobahn:reducer
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object}        the new state
 */
const connection = (state = { isConnected: false, isOpen: false }, action) => {
  switch (action.type) {
    case types.CONNECTION_OPENED:
      return {
        ...state,
        isConnected: true,
        isOpen: true,
      };

    case types.CONNECTION_CLOSED:
      return {
        ...state,
        isConnected: false,
        isOpen: false,
      };

    default:
      return state;
  }
};

/**
 * @function session
 * @memberof redux-autobahn:reducer
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object}        the new state
 */
const session = (state = { id: null, isOpen: false }, action) => {
  switch (action.type) {
    case types.CONNECTION_OPENED:
      return {
        ...state,
        id: action.session.id,
        isOpen: true,
      };

    case types.CONNECTION_CLOSED:
      return {
        ...state,
        id: null,
        isOpen: false,
      };

    default:
      return state;
  }
};

/**
 * @function subscriptions
 * @memberof redux-autobahn:reducer
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object}        the new state
 */
const subscriptions = (state = [], action) => {
  switch (action.type) {
    case types.SUBSCRIBED:
      return [
        ...state,
        action.subscription,
      ];

    case types.UNSUBSCRIBED:
      return state.filter(subscription => subscription.id !== action.subscription.id);

    case types.CONNECTION_OPENED:
    case types.CONNECTION_CLOSED:
      return [];

    default:
      return state;
  }
};

/**
 * @function registrations
 * @memberof redux-autobahn:reducer
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object}        the new state
 */
const registrations = (state = [], action) => {
  switch (action.type) {
    case types.REGISTERED:
      return [
        ...state,
        action.registration,
      ];

    case types.UNREGISTERED:
      return state.filter(registration => registration.id !== action.registration.id);

    case types.CONNECTION_OPENED:
    case types.CONNECTION_CLOSED:
      return [];

    default:
      return state;
  }
};

export default combineReducers({
  connection,
  session,
  subscriptions,
  registrations,
});
