import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common['Authorization'] = ``;
//   },
// };
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const SignUp = createAsyncThunk(
  'auth/signUp',
  async (cred, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', cred);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const SignIn = createAsyncThunk(
  'auth/signIn',
  async (cred, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', cred);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const LogOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrent',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken !== null) {
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        thunkApi.rejectWithValue(error);
      }
    } else {
      return thunkApi.rejectWithValue();
    }
  },
);
