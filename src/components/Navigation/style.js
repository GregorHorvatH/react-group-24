import { createUseStyles } from 'react-jss';

export default createUseStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #000',
    listStyle: 'none',
    margin: 0,
    padding: 10,
    minWidth: 200,
    maxWidth: 200,
    overflow: 'auto',
  },
  link: {
    backgroundColor: 'inherit',
    textDecoration: 'none',
    padding: 10,
    color: '#000',

    '&:hover': {
      backgroundColor: '#e0dff2',
    },
  },
  activeLink: {
    backgroundColor: '#2f2e73',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#151433',
    },
  },
});
