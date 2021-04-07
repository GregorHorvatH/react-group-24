import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducer';

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['user'],
// };

export const store = configureStore({
  // reducer: persistReducer(persistConfig, rootReducer),
  reducer: rootReducer,
});

export const persistor = persistStore(store);

// export default store;
