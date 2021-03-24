import { useSelector } from 'react-redux';
import { getCartItemsSelector } from '../../reducer/shop/selectors';
import CartItem from './CartItem';
import useStyles from './cart.styles';

const CartList = () => {
  const classes = useStyles();
  const items = useSelector(getCartItemsSelector);

  return (
    <ul className={classes.cartList}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
