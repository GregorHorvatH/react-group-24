import Header from './Header';
import ProductList from './ProductList';
import useStyles from './shop.styles';

const Shop = () => {
  const classes = useStyles();

  return (
    <div className={classes.shop}>
      <Header />
      <ProductList />
    </div>
  );
};

export default Shop;
