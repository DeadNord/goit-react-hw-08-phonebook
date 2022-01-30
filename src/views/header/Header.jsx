import s from './Header.module.css';
import Navigation from '../../components/phonebook/header/navigation/Navigation';
import AuthNav from '../../components/phonebook/header/authNav/AuthNav';
import UserMenu from '../../components/phonebook/header/userMenu/UserMenu';

import { useSelector } from 'react-redux';
import { getSignIn } from '../../redux/auth/auth-selectors';

export default function Header() {
  const isSignIn = useSelector(getSignIn);

  return (
    <div className={s.header}>
      <Navigation />
      {isSignIn ? <UserMenu /> : <AuthNav />}
      {/* <UserMenu />
      <AuthNav /> */}
    </div>
  );
}
