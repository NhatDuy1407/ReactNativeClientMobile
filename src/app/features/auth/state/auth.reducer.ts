import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/auth.models';
import { AuthActions } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

const authReducer = createReducer(initialAuthState, builder => {
  builder.addCase(
    AuthActions.userLogin.fulfilled,
    (state, action: PayloadAction<User>): AuthState => {
      const user = action.payload;

      return updateAuthState(state, user);
    }
  );

  builder.addCase(AuthActions.userLogin.rejected, (): AuthState => {
    return {
      ...initialAuthState,
    };
  });

  builder.addCase(
    AuthActions.restoreToken.fulfilled,
    (state, action: PayloadAction<User | null>): AuthState => {
      if (action.payload === null) {
        return {
          ...state,
          ...initialAuthState,
        };
      }

      return updateAuthState(state, action.payload);
    }
  );

  builder.addCase(AuthActions.logOut.fulfilled, (state): AuthState => {
    return {
      ...state,
      ...initialAuthState,
    };
  });
});

const updateAuthState = (state: AuthState, user: User): AuthState => {
  const newAuthState: AuthState = {
    authenticated: true,
    currentUser: {
      username: user.username,
    },
    accessToken: '123',
  };

  return {
    ...state,
    authenticated: newAuthState.authenticated,
    currentUser: newAuthState.currentUser,
  };
};

export default authReducer;
