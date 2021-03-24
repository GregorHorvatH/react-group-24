export const getShopItemsSelector = (state) => state.shop.items;

export const getShopItemSelector = (id) => {
  return (state) => state.shop.items.find((item) => item.id === id);
};

export const getCartItemSelector = (id) => (state) =>
  state.shop.cart.find(({ productId }) => productId === id);

export const getCartCountSelector = (state) =>
  state.shop.cart.reduce((acc, item) => acc + item.count, 0);

export const getCartItemsSelector = (state) => state.shop.cart;

export const getCartTotalSelector = (state) =>
  state.shop.cart
    .map(
      ({ count, productId }) =>
        count * state.shop.items.find(({ id }) => id === productId).price,
    )
    .reduce((acc, amount) => acc + amount, 0);
