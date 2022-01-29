import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from '../../AppServise';

import axios from 'axios';
axios.defaults.baseURL = 'https://61efbff4732d93001778e582.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// export const fetchContact = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }

//   //   axios
//   //     .get('/contacts')
//   //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//   //     .catch(error => dispatch(fetchContactError(error)));
// };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// export const addContact = data => dispatch => {
//   const contacts = { data };
//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', contacts)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// export const deleteContacts = id => dispatch => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
