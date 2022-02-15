import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root.state';
import { appKey, AppState } from './app.state';

const selectAppState = createSelector(
  (state: RootState) => state,
  (state: RootState) => state[appKey]
);

const selectIsLoading = createSelector(selectAppState, (state: AppState) => {
  return state.isLoading;
});

const selectIsInitializedApp = createSelector(
  selectAppState,
  (state: AppState) => {
    return state.isInitializedApp;
  }
);

export const AppSelectors = {
  selectIsLoading,
  selectIsInitializedApp,
};
