import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IconButton, Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { getShopItemSelector } from '../../reducer/shop/selectors';
import {
  cartIncrement,
  cartDecrement,
  shopCartDelete,
} from '../../reducer/shop/actions';
import useStyles from './cart.styles';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, name, price } = useSelector(getShopItemSelector(item.productId));
  const sum = price * item.count;

  const handleIncrement = () => dispatch(cartIncrement(item.id));
  const handleDecrement = () => dispatch(cartDecrement(item.id));
  const handleDelete = () => dispatch(shopCartDelete(id));

  return (
    <li className={classes.cartItem}>
      <Card className={classes.card}>
        <p>name: {name}</p>
        <div className={classes.count}>
          <span>count:</span>

          <Button onClick={handleDecrement}>-</Button>
          <span>{item.count}</span>
          <Button onClick={handleIncrement}>+</Button>
        </div>
        <p>price: {price}</p>
        <p>
          sum: <b>{sum}</b>
        </p>
      </Card>

      <IconButton onClick={handleDelete}>
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </li>
  );
};

export default CartItem;
