export const getShopItemsSelector = (state) => state.shop.items;

export const getShopItemSelector = (id) => (state) =>
  state.shop.items.find((item) => item.id === id);

export const getCartItemSelector = (id) => (state) =>
  state.shop.cart.find(({ productId }) => productId === id);

export const getCartCountSelector = (state) =>
  state.shop.cart.reduce((acc, item) => acc + item.count, 0);
