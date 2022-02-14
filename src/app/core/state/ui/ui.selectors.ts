import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/app.state';
import { uiKey, UIState } from './ui.state';

const selectUIState = createSelector(
  (state: AppState) => state,
  (state: AppState) => state[uiKey]
);

const selectIsLoading = createSelector(selectUIState, (state: UIState) => {
  return state.isLoading;
});

const selectIsInitializedApp = createSelector(
  selectUIState,
  (state: UIState) => {
    return state.isInitializedApp;
  }
);

export const UISelectors = {
  selectIsLoading,
  selectIsInitializedApp,
};
