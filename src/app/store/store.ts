import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../features/auth/state/auth.reducer';
import { authKey } from '../features/auth/state/auth.state';
import { RootState } from './root.state';
import appReducer from './state/app.reducer';
import { appKey } from './state/app.state';

const appStore = configureStore<RootState>({
  reducer: {
    [authKey]: authReducer,
    [appKey]: appReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appStore;
