import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/signIn"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        SignIn
      </NavLink>
      <NavLink to="/signUp" className={s.link} activeClassName={s.activeLink}>
        SignUp
      </NavLink>
    </nav>
  );
}
