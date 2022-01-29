import { useState } from 'react';
import s from './Form.module.css';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-operations';
import { getItems } from '../../../redux/contacts/contacts-selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(addContact(data));

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    const existContacts = contacts.find(elem => elem.name.includes(name));
    e.preventDefault();

    if (existContacts) {
      alert({
        title: 'Alert',
        text: `${existContacts.name} is already in contacts`,
      });
    } else {
      onSubmit({ name, phone });
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <p className={s.name}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        <p className={s.name}>Phone</p>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
