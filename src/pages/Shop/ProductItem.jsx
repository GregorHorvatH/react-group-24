import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardActionArea, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import {
  getShopItemSelector,
  getCartItemSelector,
} from '../../reducer/shop/selectors';
import { shopCartAdd, shopCartDelete } from '../../reducer/shop/actions';
import useStyles from './shop.styles';

const ProductItem = ({ id }) => {
  const classes = useStyles();
  const { name, price, count } = useSelector(getShopItemSelector(id));
  const cart = useSelector(getCartItemSelector(id));
  const dispatch = useDispatch();

  const handleCartClick = () => {
    if (cart) {
      dispatch(shopCartDelete(id));
    } else {
      dispatch(
        shopCartAdd({
          id: Date.now(),
          productId: id,
          count: 1,
        }),
      );
    }
  };

  return (
    <Card className={classes.productItem}>
      <IconButton className={classes.iconButton} onClick={handleCartClick}>
        {cart ? <ShoppingCartIcon /> : <AddShoppingCartOutlinedIcon />}
      </IconButton>

      <CardActionArea>
        <h4>name: {name}</h4>
        <p>price: {price}</p>
        <p>count left: {count}</p>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
