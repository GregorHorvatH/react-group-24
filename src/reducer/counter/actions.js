import types from './types';

export const incrementAction = (value) => ({
  type: types.COUNTER_INCREMENT,
  payload: value,
});

export const decrementAction = (value) => ({
  type: types.COUNTER_DECREMENT,
  payload: value,
});

export const setStepAction = (step) => ({
  type: types.COUNTER_SET_STEP,
  payload: step,
});
