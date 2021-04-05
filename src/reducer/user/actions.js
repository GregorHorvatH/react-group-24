import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('user/login/request');
export const loginSuccess = createAction('user/login/success');
export const loginFailure = createAction('user/login/failure');

export const logoutRequest = createAction('user/logout/request');
export const logoutSuccess = createAction('user/logout/success');
export const logoutFailure = createAction('user/logout/failure');

export const getCurrentUserRequest = createAction('user/current/request');
export const getCurrentUserSuccess = createAction('user/current/success');
export const getCurrentUserFailure = createAction('user/current/failure');
