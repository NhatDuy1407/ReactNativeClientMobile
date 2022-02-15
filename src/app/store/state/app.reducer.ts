import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UIActions } from './app.actions';
import { AppState, initialAppState } from './app.state';

const appReducer = createReducer(initialAppState, builder => {
  builder.addCase(
    UIActions.setLoading,
    (state: AppState, action: PayloadAction<boolean>): AppState => {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
  );

  builder.addCase(
    UIActions.initializeApp.fulfilled,
    (state: AppState): AppState => {
      return {
        ...state,
        isInitializedApp: false,
      };
    }
  );
});
export default appReducer;
