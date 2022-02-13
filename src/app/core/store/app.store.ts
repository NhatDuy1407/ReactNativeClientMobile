import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import orderReducer from '../../order/state/order.reducer';
import { orderKey } from '../../order/state/order.state';
import authReducer from '../auth/state/auth.reducer';
import { authKey } from '../auth/state/auth.state';
import uiReducer from '../ui/state/ui.reducer';
import { uiKey } from '../ui/state/ui.state';
import { AppState } from './app.state';

const appStore = configureStore<AppState>({
  reducer: {
    [authKey]: authReducer,
    [uiKey]: uiReducer,
    [orderKey]: orderReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appStore;
