import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import CartList from './CartList';
import { getCartTotalSelector } from '../../reducer/shop/selectors';
import { getShopItems, getCartItems } from '../../reducer/shop/operations';
import useStyles from './cart.styles';

const Cart = () => {
  const classes = useStyles();
  const total = useSelector(getCartTotalSelector);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    dispatch(getShopItems());
    dispatch(getCartItems());
  }, []);

  return (
    <div className={classes.cart}>
      <Link to="/shop">
        <IconButton className={classes.backButton}>
          <ArrowBackIosOutlinedIcon />
          <span>Shop</span>
        </IconButton>
      </Link>

      <h3>Total: {total}</h3>

      <CartList />
    </div>
  );
};

export default Cart;
