import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  userDetails: {
    color: 'red',
  },
});

const withUserDetailsStyle = (Component) => (props) => {
  const classes = useStyles();

  return <Component {...props} classes={classes} />;
};

export default withUserDetailsStyle;
