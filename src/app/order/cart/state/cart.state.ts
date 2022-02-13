import { CartItem } from '../../models/order.models';

export const cartKey = 'cart';

export interface CartState {
  cartItems: CartItem[];
}

export const initialCartState: CartState = {
  cartItems: [],
};
