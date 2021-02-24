import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  userDetails: {
    color: 'green',
  },
});

const withUserStyles = (Component) => (props) => {
  const classes = useStyles();

  return <Component {...props} classes={classes} />;
};

export default withUserStyles;
