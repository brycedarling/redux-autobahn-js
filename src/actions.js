import * as types from './types';

export const openConnection = () => ({
  type: types.OPEN_CONNECTION,
});

export const closeConnection = () => ({
  type: types.CLOSE_CONNECTION,
});

export const subscribe = topic => ({
  type: types.SUBSCRIBE,
  topic,
});

export const unsubscribe = (subscriptionOrTopic) => {
  const action = { type: types.UNSUBSCRIBE };
  if (typeof subscriptionOrTopic === 'string') {
    action.topic = subscriptionOrTopic;
  } else {
    action.subscription = subscriptionOrTopic;
  }
  return action;
};

export const publish = (topic, args, kwargs, options) => ({
  type: types.PUBLISH,
  topic,
  args,
  kwargs,
  options,
});

export const register = (procedure, endpoint, options) => ({
  type: types.REGISTER,
  procedure,
  endpoint,
  options,
});

export const unregister = registration => ({
  type: types.UNREGISTER,
  registration,
});

export const call = (procedure, args, kwargs, options) => ({
  type: types.CALL,
  procedure,
  args,
  kwargs,
  options,
});
