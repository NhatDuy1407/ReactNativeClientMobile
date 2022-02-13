import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../core/store/app.state';
import { orderKey } from './order.state';

const selectOrderState = createSelector(
  (state: AppState) => state,
  (state: AppState) => state[orderKey]
);

export const OrderSelectors = {
  selectOrderState,
};
