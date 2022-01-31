import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { getSignIn } from '../../../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isSignIn = useSelector(getSignIn);

  return (
    <Route {...routeProps}>
      {isSignIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
