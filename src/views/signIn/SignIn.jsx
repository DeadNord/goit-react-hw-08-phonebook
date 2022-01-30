import { useState } from 'react';
import s from './SignIn.module.css';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../../redux/auth/auth-operations';
// import { getItems } from '../../redux/contacts/contacts-selectors';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    // const existContacts = contacts.find(elem => elem.name.includes(name));
    e.preventDefault();
    dispatch(SignIn({ email, password }));
    reset();

    // if (existContacts) {
    //   alert({
    //     title: 'Alert',
    //     text: `${existContacts.name} is already in contacts`,
    //   });
    // } else {
    //   onSubmit({ name, phone });
    //   reset();
    // }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <p className={s.name}>Email</p>
        <input
          type="email"
          name="email"
          // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={email}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        <p className={s.name}>Password</p>
        <input
          type="password"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={password}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button className={s.button} type="submit">
        LogIn
      </button>
    </form>
  );
}
