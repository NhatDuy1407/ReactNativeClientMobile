import { User } from '../models/auth.models';

export const authKey = 'auth';

export interface AuthState {
  currentUser: User | null;
  authenticated: boolean;
  accessToken: string;
}

export const initialAuthState: AuthState = {
  currentUser: null,
  authenticated: false,
  accessToken: '',
};
