import { createAsyncThunk } from '@reduxjs/toolkit';
import { LogInRequest, User } from '../models/auth.models';
import {
  getLoggedUserFromStorage,
  login,
  logout,
} from '../services/auth.service';

const actionPrefix = 'Auth';

const userLogin = createAsyncThunk<User, LogInRequest, {}>(
  `${actionPrefix} User Login`,
  async (loginRequest: LogInRequest) => {
    return login(loginRequest);
  }
);

const restoreToken = createAsyncThunk(
  `${actionPrefix} User Restore Token`,
  async () => {
    return getLoggedUserFromStorage();
  }
);

const logOut = createAsyncThunk<void>(
  `${actionPrefix} User Logout`,
  async () => {
    await logout();
  }
);

export const AuthActions = {
  userLogin,
  restoreToken,
  logOut,
};
