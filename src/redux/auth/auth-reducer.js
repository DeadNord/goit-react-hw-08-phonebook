import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { SignUp, SignIn, LogOut, fetchCurrentUser } from './auth-operations';

const userReducer = createReducer(
  { name: null, email: null },
  {
    // [SignUp.pending]: (_, { payload }) => payload.user,
    [SignUp.fulfilled]: (_, { payload }) => payload.user,
    // [SignUp.rejected]: (_, { payload }) => payload.user,
    // [SignIn.pending]: (_, { payload }) => payload.user,
    [SignIn.fulfilled]: (_, { payload }) => payload.user,
    // [SignIn.rejected]: (_, { payload }) => payload.user,
    // [LogOut.pending]: (_, { payload }) => payload.user,
    [LogOut.fulfilled]: () => ({ name: null, email: null }),
    // [LogOut.rejected]: (_, { payload }) => payload.user,
    // [fetchCurrentUser.pending]: (_, { payload }) => payload.user,
    [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
    // [fetchCurrentUser.rejected]: (_, { payload }) => payload.user,
  },
);

const chooseToken = createReducer(null, {
  [SignUp.fulfilled]: (_, { payload }) => payload.token,
  [SignIn.fulfilled]: (_, { payload }) => payload.token,
  [LogOut.fulfilled]: () => null,
});

const isSignIn = createReducer(false, {
  [SignUp.fulfilled]: () => true,
  [SignIn.fulfilled]: () => true,
  [LogOut.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
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
