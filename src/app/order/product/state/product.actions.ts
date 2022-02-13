import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/product.api';

const actionPrefix = 'Product';

const loadProducts = createAsyncThunk(
  `${actionPrefix} Load Products`,
  async () => getProducts()
);

export const ProductActions = {
  loadProducts,
};
