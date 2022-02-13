import { cartKey, CartState } from '../cart/state/cart.state';
import { productKey, ProductState } from '../product/state/product.state';

export const orderKey = 'order';

export interface OrderState {
  [productKey]: ProductState;
  [cartKey]: CartState;
}
