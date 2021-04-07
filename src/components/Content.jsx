import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { routes } from '../routes';
import styles from './content.module.scss';

const Content = () => (
  <div className={styles.content}>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {routes.map(
          ({ path, exact, component: Component, needsAuthorization }) =>
            needsAuthorization ? (
              <PrivateRoute
                key={path}
                path={path}
                exact={exact}
                component={Component}
              />
            ) : (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={Component}
              />
            ),
        )}
      </Switch>
    </Suspense>
  </div>
);

export default Content;
