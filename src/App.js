import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// importComponent
import Section from './components/phonebook/section/Section';
import Form from './components/phonebook/form/Form';
import Contacts from './components/phonebook/contacts/Contacts';
import Filter from './components/phonebook/filter/Filter';

import Header from './views/header/Header';
// import LogIn from './views/logIn/LogIn';
// import SignUp from './views/signUp/SignUp';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/auth-operations';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const SignIn = lazy(() => import('./views/signIn/SignIn'));
const SignUp = lazy(() => import('./views/signUp/SignUp'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
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
          {/* <Route exact path="/">
            <Section title={'Home'}>
              <Form />
            </Section>
          </Route> */}
          <Route exact path="/">
            <Section title={'HomePage'}>
              <HomePage />
            </Section>
          </Route>
          <Route exact path="/signIn">
            <Section title={'SignIn'}>
              <SignIn />
            </Section>
          </Route>
          <Route exact path="/signUp">
            <Section title={'SignUp'}>
              <SignUp />
            </Section>
          </Route>
          <Route path="/contacts">
            <Section title={'Phonebook'}>
              <Form />
            </Section>
            <Section title={'Contacts'}>
              <Filter />
              <Contacts />
            </Section>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
