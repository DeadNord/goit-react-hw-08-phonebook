import s from './Contacts.module.css';
import Contact from './Contact';
import { useEffect } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getLoading,
} from '../../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();
  // const deleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading === true && (
        <Loader type="Puff" color="#00BFFF" height={160} width={160} />
      )}
      {loading !== true && contacts.length > 0 && (
        <ul className={s.contactsList}>
          {contacts.map(item => (
            <Contact
              key={item.id}
              name={item.name}
              number={item.phone}
              id={item.id}
              deleteContact={id => dispatch(deleteContact(id))}
            />
          ))}
        </ul>
      )}
    </>
  );
}
