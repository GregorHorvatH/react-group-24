import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import {
  getShopItemsSelector,
  getIsLoadingSelector,
} from '../../reducer/shop/selectors';
import useStyles from './shop.styles';

const ProductList = () => {
  const classes = useStyles();
  const items = useSelector(getShopItemsSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className={classes.productList}>
      {items.map(({ id }) => (
        <ProductItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default ProductList;
