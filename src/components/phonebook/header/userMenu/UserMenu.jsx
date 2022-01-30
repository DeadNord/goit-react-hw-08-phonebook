import s from './UserMenu.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../../../redux/auth/auth-selectors';
import { LogOut } from '../../../../redux/auth/auth-operations';

export default function UserMenu() {
  //   LogOut = () => {
  //     return signOut(auth).then(() => {
  //       // Sign-out successful.
  //       const userId = null;
  //       sessionStorage.removeItem('userId');
  //       sessionStorage.removeItem('userName');
  //       this.props.onlineCheck();
  //     });
  //   };
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const LoggOut = () => dispatch(LogOut());

  return (
    <div className={s.container}>
      <p className={s.user}>{name}</p>

      <div>
        <button type="s.button" className={s.button} onClick={LoggOut}>
          LogOut
        </button>
      </div>
    </div>
  );
}
