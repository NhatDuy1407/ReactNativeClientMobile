export const uiKey = 'ui';

export interface UIState {
  isLoading: boolean;
  isInitializedApp: boolean;
}

export const initialUIState: UIState = {
  isLoading: false,
  isInitializedApp: true,
};
