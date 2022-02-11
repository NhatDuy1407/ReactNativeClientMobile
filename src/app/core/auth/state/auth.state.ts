import { User } from '../models/auth.models';

export interface AuthState {
  loginUser: User | null;
  authenticated: boolean;
}

export const initialAuthState: AuthState = {
  loginUser: null,
  authenticated: false,
};
