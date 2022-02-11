import { AuthState } from '../auth/state/auth.state';

export const authKey = 'auth';

export interface AppState {
  [authKey]: AuthState;
}
