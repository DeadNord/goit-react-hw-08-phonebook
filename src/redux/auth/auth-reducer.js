import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { SignUp, SignIn, LogOut, fetchCurrentUser } from './auth-operations';

const userReducer = createReducer(
  { name: null, email: null },
  {
    [SignUp.fulfilled]: (_, { payload }) => payload.user,
    [SignIn.fulfilled]: (_, { payload }) => payload.user,
    [LogOut.fulfilled]: () => ({ name: null, email: null }),
    [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
    //   [LogIn.fulfilled]: (_, { payload }) => payload,
    //   [SignUp.rejected]: (state, { payload }) =>
    //         state.filter(contact => contact.id !== payload),
  },
);

const chooseToken = createReducer(null, {
  [SignUp.fulfilled]: (_, { payload }) => payload.token,
  [SignIn.fulfilled]: (_, { payload }) => payload.token,
  [LogOut.fulfilled]: () => null,
  //   [LogIn.fulfilled]: (_, { payload }) => payload,
  //   [SignUp.rejected]: (state, { payload }) =>
  //         state.filter(contact => contact.id !== payload),
});

const isSignIn = createReducer(false, {
  [SignUp.fulfilled]: () => true,
  [SignIn.fulfilled]: () => true,
  [LogOut.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
  // [fetchCurrentUser.rejected]: () => false,
  //   [LogIn.fulfilled]: (_, { payload }) => payload,
  //   [SignUp.rejected]: (state, { payload }) =>
  //         state.filter(contact => contact.id !== payload),
});

const isFetchingCurrentUser = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

export default combineReducers({
  user: userReducer,
  token: chooseToken,
  isSignIn,
  isFetchingCurrentUser,
});
