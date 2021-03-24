import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import CartList from './CartList';
import useStyles from './cart.styles';

const Cart = () => {
  const classes = useStyles();

  return (
    <div className={classes.cart}>
      <Link to="/shop">
        <IconButton className={classes.backButton}>
          <ArrowBackIosOutlinedIcon />
          <span>Shop</span>
        </IconButton>
      </Link>

      <CartList />
    </div>
  );
};

export default Cart;
