import { createSelector } from '@reduxjs/toolkit';
import { OrderSelectors } from '../../state/order.selectors';
import { OrderState } from '../../state/order.state';
import { productKey, ProductState } from './product.state';

const selectProductState = createSelector(
  OrderSelectors.selectOrderState,
  (state: OrderState) => state[productKey]
);

const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => {
    return state.products;
  }
);

export const ProductSelectors = {
  selectProducts,
};
