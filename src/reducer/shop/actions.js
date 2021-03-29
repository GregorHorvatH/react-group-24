// ===== before =====
// import types from './types';

// export const shopFilterSet = (payload) => ({
//   type: types.SHOP_FILTER_SET,
//   payload,
// });

// export const shopCartAdd = (payload) => ({
//   type: types.SHOP_CART_ADD,
//   payload,
// });

// export const shopCartDelete = (payload) => ({
//   type: types.SHOP_CART_DELETE,
//   payload,
// });

// export const cartIncrement = (payload) => ({
//   type: types.CART_INCREMENT,
//   payload,
// });

// export const cartDecrement = (payload) => ({
//   type: types.CART_DECREMENT,
//   payload,
// });

// ===== after =====
import { createAction } from '@reduxjs/toolkit';

export const shopFilterSet = createAction('shop/filter/set');
export const shopCartAdd = createAction('shop/cart/add');
export const shopCartDelete = createAction('shop/cart/delete');
export const cartIncrement = createAction('cart/increment');
export const cartDecrement = createAction('cart/decrement');

export const shopItemsRequest = createAction('shop/items/request');
export const shopItemsSuccess = createAction('shop/items/success');
export const shopItemsFailure = createAction('shop/items/failure');

export const cartItemsRequest = createAction('shop/cart/request');
export const cartItemsSuccess = createAction('shop/cart/success');
export const cartItemsFailure = createAction('shop/cart/failure');
