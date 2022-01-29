import { combineReducers } from 'redux';

// import { createSlice } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

// const contactsReducer = createReducer([], {
//   [actions.fetchContactsSuccess]: (_, { payload }) => payload,
// });

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

// const errorReducer = createReducer('', {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  isLoading,
  // error: errorReducer,
  filter: filterReducer,
});
