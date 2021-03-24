import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { getShopItemsSelector } from './selectors';
import useStyles from './shop.styles';

const ProductList = () => {
  const classes = useStyles();
  const items = useSelector(getShopItemsSelector);

  return (
    <ul className={classes.productList}>
      {items.map(({ id }) => (
        <ProductItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default ProductList;
