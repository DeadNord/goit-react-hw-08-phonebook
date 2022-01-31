import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { getSignIn } from '../../../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isSignIn = useSelector(getSignIn);

  return (
    <Route {...routeProps}>
      {isSignIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
