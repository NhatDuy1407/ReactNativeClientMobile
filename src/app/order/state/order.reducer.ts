import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../cart/state/cart.reducer';
import { cartKey } from '../cart/state/cart.state';
import productReducer from '../product/state/product.reducer';
import { productKey } from '../product/state/product.state';

const orderReducer = combineReducers({
  [productKey]: productReducer,
  [cartKey]: cartReducer,
});

export default orderReducer;
