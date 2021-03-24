// import types from './types';

// export const incrementAction = (payload) => ({
//   type: types.COUNTER_INCREMENT,
//   payload,
// });

// export const decrementAction = (payload) => ({
//   type: types.COUNTER_DECREMENT,
//   payload,
// });

// export const setStepAction = (payload) => ({
//   type: types.COUNTER_SET_STEP,
//   payload,
// });

import { createAction } from '@reduxjs/toolkit';

export const incrementAction = createAction('counter/increment');
export const decrementAction = createAction('counter/decrement');
export const setStepAction = createAction('counter/set_step');

// export const someAction = createAction('some/action', (name, age) => ({
//   payload: {
//     id: Date.now(),
//     name,
//     age,
//   },
// }));
