import React from 'react';
import NavLink from '../NavLink';
import { routes } from '../../routes';
import useStyles from './style';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label }) => (
        <NavLink key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default Navigation;
