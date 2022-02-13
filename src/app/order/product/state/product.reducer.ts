import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/order.models';
import { ProductActions } from './product.actions';
import { initialProductState, ProductState } from './product.state';

const productReducer = createReducer(initialProductState, builder => {
  builder.addCase(
    ProductActions.loadProducts.fulfilled,
    (state, action: PayloadAction<Product[]>): ProductState => {
      return {
        ...state,
        products: action.payload,
      };
    }
  );
});

export default productReducer;
