import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LogInRequest } from '../models/auth.models';
import {
  getLoggedUserFromStorage,
  login,
  logout,
} from '../services/auth.service';
import { AuthState } from './auth.state';

const actionPrefix = 'Auth';

const userLogin = createAsyncThunk(
  `${actionPrefix} User Login`,
  async (loginRequest: LogInRequest, { dispatch }) => {
    try {
      const user = await login(loginRequest);

      dispatch(
        AuthActions.userLoginSuccess({
          authenticated: true,
          currentUser: {
            username: user.username,
          },
          accessToken: '123',
        })
      );
    } catch {
      dispatch(AuthActions.userLoginFailure());
    }
  }
);

const restoreToken = createAsyncThunk<AuthState, void, {}>(
  `${actionPrefix} User Restore Token`,
  async () => {
    const user = await getLoggedUserFromStorage();
    if (user) {
      return {
        authenticated: true,
        currentUser: user,
        accessToken: '123',
      } as AuthState;
    }

    return {
      authenticated: false,
      currentUser: null,
      accessToken: '',
    } as AuthState;
  }
);

const logOut = createAsyncThunk<AuthState>(
  `${actionPrefix} User Logout`,
  async () => {
    await logout();

    return {
      authenticated: false,
      currentUser: null,
      accessToken: '',
    } as AuthState;
  }
);

const userLoginSuccess = createAction<AuthState>(
  `${actionPrefix} User Login Success`
);

const userLoginFailure = createAction(`${actionPrefix} User Login Failure`);

export const AuthActions = {
  userLogin,
  restoreToken,
  logOut,
  userLoginFailure,
  userLoginSuccess,
};
