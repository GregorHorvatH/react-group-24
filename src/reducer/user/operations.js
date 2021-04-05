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

export const getCurrenUser = () => (dispatch) => {
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(actions.getCurrentUserFailure(error.message)));
};
