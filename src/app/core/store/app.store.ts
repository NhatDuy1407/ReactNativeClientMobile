import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authReducer } from '../auth/state/auth.reducer';
import { AppState, authKey } from './app.state';

const appStore = configureStore<AppState>({
  reducer: {
    [authKey]: authReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appStore;
