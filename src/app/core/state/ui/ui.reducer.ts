import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UIActions } from './ui.actions';
import { initialUIState, UIState } from './ui.state';

const uiReducer = createReducer(initialUIState, builder => {
  builder.addCase(
    UIActions.setLoading,
    (state: UIState, action: PayloadAction<boolean>): UIState => {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
  );

  builder.addCase(
    UIActions.initializeApp.fulfilled,
    (state: UIState): UIState => {
      return {
        ...state,
        isInitializedApp: false,
      };
    }
  );
});
export default uiReducer;
