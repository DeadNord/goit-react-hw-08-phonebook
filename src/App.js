import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// importComponent
import Section from './components/phonebook/section/Section';
import Header from './views/header/Header';
import PrivateRoute from './components/phonebook/header/route/PrivateRoute';
import PublicRoute from './components/phonebook/header/route/PublicRoute';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from './redux/auth/auth-selectors';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const ContactsView = lazy(() => import('./views/contacts/ContactsView'));
const SignIn = lazy(() => import('./views/signIn/SignIn'));
const SignUp = lazy(() => import('./views/signUp/SignUp'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  // console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Section>
          <Header></Header>
        </Section>

        <Suspense
          fallback={
            <Section>
              <Loader type="Puff" color="#00BFFF" height={200} width={200} />
            </Section>
          }
        >
          <Switch>
            <PublicRoute exact path="/">
              <Section title={'HomePage'}>
                <HomePage />
              </Section>
            </PublicRoute>
            <PublicRoute exact path="/signIn" restricted redirectTo="/contacts">
              <Section title={'SignIn'}>
                <SignIn />
              </Section>
            </PublicRoute>
            <PublicRoute exact path="/signUp" restricted redirectTo="/contacts">
              <Section title={'SignUp'}>
                <SignUp />
              </Section>
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/signIn">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
}
