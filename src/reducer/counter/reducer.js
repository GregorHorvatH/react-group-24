import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  value: 1,
  step: 1,
};

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.COUNTER_INCREMENT:
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case types.COUNTER_DECREMENT:
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     case types.COUNTER_SET_STEP:
//       return {
//         ...state,
//         step: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default counterReducer;

const value = (state = initialState.value, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + action.payload;

    case types.COUNTER_DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const step = (state = initialState.step, action) => {
  switch (action.type) {
    case types.COUNTER_SET_STEP:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  value,
  step,
});
