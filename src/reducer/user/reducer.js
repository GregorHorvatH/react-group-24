import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  isAppLoading: true,
  isAuthorized: false,
  error: '',
};

const isAppLoading = createReducer(initialState.isAppLoading, {
  [actions.getCurrentUserSuccess.type]: () => false,
  [actions.getCurrentUserFailure.type]: () => false,
});

const isAuthorized = createReducer(initialState.isAuthorized, {
  [actions.getCurrentUserSuccess.type]: () => true,
  [actions.loginSuccess.type]: () => true,
  [actions.logoutRequest.type]: () => false,
});

const isLoading = createReducer(initialState.isLoading, {
  [actions.getCurrentUserRequest.type]: () => true,
  [actions.getCurrentUserSuccess.type]: () => false,
  [actions.getCurrentUserFailure.type]: () => false,

  [actions.loginRequest.type]: () => true,
  [actions.loginSuccess.type]: () => false,
  [actions.loginFailure.type]: () => false,

  [actions.logoutRequest.type]: () => true,
  [actions.logoutSuccess.type]: () => false,
  [actions.logoutFailure.type]: () => false,
});

const user = createReducer(initialState.user, {
  // [actions.loginSuccess.type]: (_, action) => action.payload.user,
  [actions.getCurrentUserSuccess.type]: (_, action) => action.payload,
  [actions.logoutSuccess.type]: () => initialState.user,
  [actions.logoutFailure.type]: () => initialState.user,
});

const token = createReducer(initialState.token, {
  [actions.loginSuccess.type]: (_, action) => action.payload.token,
  [actions.logoutSuccess.type]: () => initialState.token,
  [actions.logoutFailure.type]: () => initialState.token,
});

const setError = (_, action) => action.payload;

const error = createReducer(initialState.error, {
  [actions.getCurrentUserFailure.type]: setError,
  [actions.loginFailure.type]: setError,
  [actions.logoutFailure.type]: setError,
});

export default combineReducers({
  isAppLoading,
  isLoading,
  isAuthorized,
  user,
  token,
  error,
});
