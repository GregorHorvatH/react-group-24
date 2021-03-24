// ===== after =====
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  items: [
    {
      id: 1,
      name: 'phone 1',
      price: 5000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.',
      count: 5,
    },
    {
      id: 2,
      name: 'phone 2',
      price: 7000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.',
      count: 3,
    },
    {
      id: 3,
      name: 'phone 3',
      price: 8000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.',
      count: 1,
    },
    {
      id: 4,
      name: 'notebook 1',
      price: 11000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.',
      count: 2,
    },
  ],
  cart: [
    {
      id: 1,
      productId: 2,
      count: 1,
    },
    {
      id: 2,
      productId: 4,
      count: 1,
    },
  ],
  filter: {},
};

const items = (state = initialState.items, action) => state;

// ===== before =====
// import { combineReducers } from 'redux';
// import types from './types';

// const cart = (state = initialState.cart, action) => {
//   switch (action.type) {
//     case types.SHOP_CART_ADD:
//       return [...state, action.payload];

//     case types.SHOP_CART_DELETE:
//       return state.filter(({ productId }) => productId !== action.payload);

//     case types.CART_INCREMENT:
//       return state.map((item) =>
//         item.id === action.payload
//           ? {
//               ...item,
//               count: item.count + 1,
//             }
//           : item,
//       );

//     case types.CART_DECREMENT:
//       return state.map((item) =>
//         item.id === action.payload
//           ? {
//               ...item,
//               count: item.count - 1 < 0 ? 0 : item.count - 1,
//             }
//           : item,
//       );

//     default:
//       return state;
//   }
// };

// const filter = (state = initialState.filter, action) => {
//   switch (action.type) {
//     case types.SHOP_FILTER_SET:
//       return action.payload;

//     default:
//       return state;
//   }
// };

const shopCartAdd = (state, action) => [...state, action.payload];

const shopCartDelete = (state, action) =>
  state.filter(({ productId }) => productId !== action.payload);

const cartIncrement = (state, action) =>
  state.map((item) =>
    item.id === action.payload
      ? {
          ...item,
          count: item.count + 1,
        }
      : item,
  );

const cartDecrement = (state, action) =>
  state.map((item) =>
    item.id === action.payload
      ? {
          ...item,
          count: item.count - 1 < 0 ? 0 : item.count - 1,
        }
      : item,
  );

const cart = createReducer(initialState.cart, {
  [actions.shopCartAdd.type]: shopCartAdd,
  [actions.shopCartDelete.type]: shopCartDelete,
  [actions.cartIncrement.type]: cartIncrement,
  [actions.cartDecrement.type]: cartDecrement,
});

const filter = createReducer(initialState.filter, {
  [actions.shopFilterSet.type]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  cart,
  filter,
});
