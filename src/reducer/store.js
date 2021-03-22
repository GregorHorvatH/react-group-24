import { createStore } from 'redux';
import reducer from './reducer';

// const data = {
//   counter: {
//     value: 500,
//     step: 5,
//   },
// };

const store = createStore(
  reducer,
  // data,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
