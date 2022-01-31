export const getSignIn = state => state.auth.isSignIn;

export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
