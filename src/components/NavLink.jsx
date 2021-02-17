import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  link: (isActive) => ({
    backgroundColor: isActive ? '#2f2e73' : 'inherit',
    textDecoration: 'none',
    padding: 10,
    color: isActive ? '#fff' : '#000',

    '&:hover': {
      backgroundColor: isActive ? '#151433' : '#e0dff2',
    },
  }),
});

const NavLink = ({ path, label }) => {
  const { pathname } = window.location;
  const isActive = pathname === path;
  const classes = useStyles(isActive);

  return (
    <a className={classes.link} href={path}>
      {label}
    </a>
  );
};

NavLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavLink;
