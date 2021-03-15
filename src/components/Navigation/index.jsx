import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import useStyles from './style';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label, showInMenu }) =>
        showInMenu ? (
          <NavLink
            key={path}
            className={classes.link}
            activeClassName={classes.activeLink}
            to={path}
            exact
          >
            {label}
          </NavLink>
        ) : null,
      )}
    </div>
  );
};

export default Navigation;
