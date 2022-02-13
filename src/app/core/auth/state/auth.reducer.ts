import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { AuthActions } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

const authReducer = createReducer(initialAuthState, builder => {
  builder.addCase(
    AuthActions.userLoginSuccess,
    (state, action: PayloadAction<AuthState>): AuthState => {
      return updateAuthState(state, action.payload);
    }
  );

  builder.addCase(AuthActions.userLoginFailure, (): AuthState => {
    return {
      ...initialAuthState,
    };
  });

  builder.addCase(
    AuthActions.restoreToken.fulfilled,
    (state, action: PayloadAction<AuthState>): AuthState => {
      return updateAuthState(state, action.payload);
    }
  );

  builder.addCase(
    AuthActions.logOut.fulfilled,
    (state, action: PayloadAction<AuthState>): AuthState => {
      return updateAuthState(state, action.payload);
    }
  );
});

const updateAuthState = (state: AuthState, newState: AuthState): AuthState => {
  return {
    ...state,
    authenticated: newState.authenticated,
    currentUser: newState.currentUser,
  };
};

export default authReducer;
