import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { SignUp, SignIn, LogOut, fetchCurrentUser } from './auth-operations';

const userReducer = createReducer([], {
  [SignUp.fulfilled]: (_, { payload }) => payload.user,
  [SignIn.fulfilled]: (_, { payload }) => payload.user,
  [LogOut.fulfilled]: () => ({ name: null, email: null }),
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
  //   [LogIn.fulfilled]: (_, { payload }) => payload,
  //   [SignUp.rejected]: (state, { payload }) =>
  //         state.filter(contact => contact.id !== payload),
});

const chooseToken = createReducer([], {
  [SignUp.fulfilled]: (_, { payload }) => payload.token,
  [SignIn.fulfilled]: (_, { payload }) => payload.token,
  [LogOut.fulfilled]: () => null,
  //   [LogIn.fulfilled]: (_, { payload }) => payload,
  //   [SignUp.rejected]: (state, { payload }) =>
  //         state.filter(contact => contact.id !== payload),
});

const isSignIn = createReducer([], {
  [SignUp.fulfilled]: () => true,
  [SignIn.fulfilled]: () => true,
  [LogOut.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
  //   [LogIn.fulfilled]: (_, { payload }) => payload,
  //   [SignUp.rejected]: (state, { payload }) =>
  //         state.filter(contact => contact.id !== payload),
});

export default combineReducers({
  user: userReducer,
  token: chooseToken,
  isSignIn,
});
