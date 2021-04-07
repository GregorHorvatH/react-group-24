// import { createStore } from 'redux';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'thunk';

// const logger = (store) => (next) => (action) => {
//   console.log('type:', action.type);

//   // next(action);
// };

const store = configureStore({
  reducer,
  // middleware: [logger],
});

// const data = {
//   counter: {
//     value: 500,
//     step: 5,
//   },
// };

// const store = createStore(
//   reducer,
//   // data,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
