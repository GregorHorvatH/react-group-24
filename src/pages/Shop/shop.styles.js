import { createUseStyles } from 'react-jss';

export default createUseStyles({
  shop: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    marginBottom: 15,
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
  },
  productList: {
    overflow: 'auto',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  iconButton: {
    alignSelf: 'flex-end',
  },
});
