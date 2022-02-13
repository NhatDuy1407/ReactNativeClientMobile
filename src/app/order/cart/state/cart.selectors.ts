import { createSelector } from '@reduxjs/toolkit';
import { OrderSelectors } from '../../state/order.selectors';
import { OrderState } from '../../state/order.state';
import { cartKey, CartState } from './cart.state';

const selectCartState = createSelector(
  OrderSelectors.selectOrderState,
  (state: OrderState) => state[cartKey]
);

const selectCartItems = createSelector(selectCartState, (state: CartState) => {
  return state.cartItems;
});

const selectItemsCount = createSelector(selectCartState, (state: CartState) => {
  return state.cartItems.reduce((sum, item) => sum + item.qty, 0);
});

const selectTotalPrice = createSelector(selectCartState, (state: CartState) => {
  return state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
});

export const CartSelectors = {
  selectCartItems,
  selectItemsCount,
  selectTotalPrice,
};
