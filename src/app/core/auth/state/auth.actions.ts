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
          loginUser: {
            username: user.username,
          },
        })
      );
    } catch {
      dispatch(AuthActions.userLoginFailure());
    }
  }
);

const restoreToken = createAsyncThunk<AuthState>(
  `${actionPrefix} User Restore Token`,
  async () => {
    const user = await getLoggedUserFromStorage();
    if (user) {
      return {
        authenticated: true,
        loginUser: user,
      };
    }

    return {
      authenticated: false,
      loginUser: null,
    };
  }
);

const logOut = createAsyncThunk<AuthState>(
  `${actionPrefix} User Logout`,
  async () => {
    await logout();

    return {
      authenticated: false,
      loginUser: null,
    };
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
