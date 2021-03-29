import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {
  getCartCountSelector,
  getCartTotalSelector,
  getCartIsLoadingSelector,
} from '../../reducer/shop/selectors';
import useStyles from './shop.styles';

const Header = () => {
  const classes = useStyles();
  const count = useSelector(getCartCountSelector);
  const total = useSelector(getCartTotalSelector);
  const cartIsLoading = useSelector(getCartIsLoadingSelector);

  return (
    <AppBar className={classes.header} position="static">
      <Toolbar className={classes.toolbar}>
        <h2 className={classes.title}>My Awesome Shop</h2>

        {cartIsLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>total: {total}</h3>
            <Link to="/cart">
              <IconButton>
                <Badge badgeContent={count} color="secondary">
                  <ShoppingCartOutlinedIcon style={{ color: '#fff' }} />
                </Badge>
              </IconButton>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
