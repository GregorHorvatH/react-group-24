import { createUseStyles } from 'react-jss';

export default createUseStyles({
  cart: {
    display: 'flex',
    flexDirection: 'column',
  },
  backButton: {
    alignSelf: 'flex-start',

    '&.MuiIconButton-root': {
      borderRadius: 5,
    },
  },
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  cartItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    padding: 10,
  },
  count: {
    display: 'flex',
    alignItems: 'center',
  },
});
