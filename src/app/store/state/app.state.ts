export const appKey = 'app';

export interface AppState {
  isLoading: boolean;
  isInitializedApp: boolean;
}

export const initialAppState: AppState = {
  isLoading: false,
  isInitializedApp: true,
};
