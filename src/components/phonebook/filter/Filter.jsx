import s from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../../redux/contacts/contacts-actions';
import { getFilter } from '../../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label>
      <p className={s.name}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        value={value}
        className={s.input}
      />
    </label>
  );
}
