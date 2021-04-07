import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import counter from './counter/reducer';
import todos from './todos/reducer';
import shop from './shop/reducer';
import user from './user/reducer';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  counter,
  todos,
  shop,
  user: persistReducer(persistConfig, user),
});
