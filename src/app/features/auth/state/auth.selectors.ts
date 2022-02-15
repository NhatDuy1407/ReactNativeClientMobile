import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/root.state';
import { authKey, AuthState } from './auth.state';

const selectAuthState = createSelector(
  (state: RootState) => state,
  (state: RootState) => state[authKey]
);

const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.currentUser;
  }
);

const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.authenticated;
  }
);

export const AuthSelectors = {
  selectCurrentUser,
  selectIsAuthenticated,
};
