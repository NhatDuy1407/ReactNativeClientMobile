import { createSelector } from '@reduxjs/toolkit';
import { AppState, authKey } from '../../store/app.state';
import { AuthState } from './auth.state';

const selectAuthState = createSelector(
  (state: AppState) => state,
  (state: AppState) => state[authKey]
);

const selectLoggedUser = createSelector(selectAuthState, (state: AuthState) => {
  return state.loginUser;
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
