import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/app.state';
import { authKey, AuthState } from './auth.state';

const selectAuthState = createSelector(
  (state: AppState) => state,
  (state: AppState) => state[authKey]
);

const selectLoggedUser = createSelector(selectAuthState, (state: AuthState) => {
  return state.currentUser;
});

const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.authenticated;
  }
);

export const AuthSelectors = {
  selectLoggedUser,
  selectIsAuthenticated,
};
