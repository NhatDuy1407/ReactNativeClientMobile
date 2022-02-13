import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../models/order.models';

const actionPrefix = 'Cart';

const addItemToCart = createAction<Product>(`${actionPrefix} Add Item To Cart`);

export const CartActions = {
  addItemToCart,
};
