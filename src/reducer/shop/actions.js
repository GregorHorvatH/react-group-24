import types from './types';

export const shopFilterSet = (payload) => ({
  type: types.SHOP_FILTER_SET,
  payload,
});

export const shopCartAdd = (payload) => ({
  type: types.SHOP_CART_ADD,
  payload,
});

export const shopCartDelete = (payload) => ({
  type: types.SHOP_CART_DELETE,
  payload,
});

export const cartIncrement = (payload) => ({
  type: types.CART_INCREMENT,
  payload,
});

export const cartDecrement = (payload) => ({
  type: types.CART_DECREMENT,
  payload,
});
