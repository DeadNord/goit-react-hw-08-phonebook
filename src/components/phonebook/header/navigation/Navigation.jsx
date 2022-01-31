import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

import { useSelector } from 'react-redux';
import { getSignIn } from '../../../../redux/auth/auth-selectors';

export default function Navigation() {
  const isSignIn = useSelector(getSignIn);
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      {isSignIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
