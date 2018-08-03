import reduxAutobahn from 'redux-autobahn-js';
import { combineReducers } from 'redux';

const initialState = {
  connected: false,
  method: false,
  subscription: '',
  message: ''
};

const originalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'autobahn/CONNECTION_OPENED':
      return {
        ...state,
        connected: true,
        message: `Connected to WAMP`
      };

    case 'autobahn/SUBSCRIBED':
      return {
        ...state,
        subscription: action.topic,
        message: `Subcribed to ${action.topic}`
      };

    case 'autobahn/PUBLISHED':
      return {
        ...state,
        message: `Published ${action.args[0]} to ${action.topic}`
      };

    case 'autobahn/REGISTERED':
      return {
        ...state,
        message: 'Registered a method to the WAMP server',
        method: true
      };

    case 'autobahn/RESULT':
      return {
        ...state,
        message: `Published ${action.args} to WAMP method, received ${
          action.results
        }`
      };

    default:
      return state;
  }
};

export default combineReducers({
  autobahnConnection: reduxAutobahn.reducer,
  originalReducer
});
