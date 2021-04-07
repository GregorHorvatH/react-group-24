import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthorizedSelector } from '../reducer/user/selectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getIsAuthorizedSelector);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
