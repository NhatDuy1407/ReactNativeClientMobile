import { authKey, AuthState } from '../features/auth/state/auth.state';
import { appKey, AppState } from './state/app.state';

export interface RootState {
  [authKey]: AuthState;
  [appKey]: AppState;
}
