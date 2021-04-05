import { combineReducers } from 'redux';
import counter from './counter/reducer';
import todos from './todos/reducer';
import shop from './shop/reducer';
import user from './user/reducer';

export default combineReducers({
  counter,
  todos,
  shop,
  user,
});
