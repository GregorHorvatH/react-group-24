import axios from 'axios';
import {
  shopItemsRequest,
  shopItemsSuccess,
  shopItemsFailure,
  cartItemsRequest,
  cartItemsSuccess,
  cartItemsFailure,
} from './actions';

axios.defaults.baseURL = 'http://localhost:8080';

export const getShopItems = () => (dispatch) => {
  dispatch(shopItemsRequest());

  axios
    .get('/shop-items')
    .then(({ data }) => dispatch(shopItemsSuccess(data)))
    .catch((error) => dispatch(shopItemsFailure(error.message)));
};

export const getCartItems = () => (dispatch) => {
  dispatch(cartItemsRequest());

  axios
    .get('/cart')
    .then(({ data }) => dispatch(cartItemsSuccess(data)))
    .catch((error) => dispatch(cartItemsFailure(error.message)));
};
