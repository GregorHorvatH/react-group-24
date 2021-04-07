import axios from 'axios';
import * as actions from './actions';

// https://goit-phonebook-api.herokuapp.com/docs/#/
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = (token) => (axios.defaults.headers['Authorization'] = token);

export const login = (payload) => (dispatch) => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', payload)
    .then(({ data }) => {
      dispatch(actions.loginSuccess(data));
      setToken(data.token);
    })
    .catch((error) => dispatch(actions.loginFailure(error.message)));
};

export const logout = () => (dispatch) => {
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      dispatch(actions.logoutSuccess());
      setToken(undefined);
    })
    .catch((error) => dispatch(actions.logoutFailure(error.message)));
};

export const getCurrenUser = () => (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  if (!token) return;

  setToken(token);
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(actions.getCurrentUserFailure(error.message)));
};
