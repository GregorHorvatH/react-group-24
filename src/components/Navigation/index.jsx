import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { getIsAuthorizedSelector } from '../../reducer/user/selectors';
import useStyles from './style';

const Navigation = () => {
  const classes = useStyles();
  const isAuthorized = useSelector(getIsAuthorizedSelector);

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label, showInMenu, needsAuthorization }) =>
        showInMenu &&
        (!needsAuthorization || needsAuthorization === isAuthorized) ? (
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
