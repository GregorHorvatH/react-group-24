export const getCartItemsSelector = (state) => state.shop.cart;

export const getCartItemSelector = (id) => (state) =>
  state.shop.cart.find((item) => item.id === id);

export const getShopItemSelector = (id) => (state) =>
  state.shop.items.find((item) => item.id === id);
