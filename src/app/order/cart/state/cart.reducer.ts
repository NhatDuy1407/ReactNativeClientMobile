import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../models/order.models';
import { CartActions } from './cart.actions';
import { CartState, initialCartState } from './cart.state';

const cartReducer = createReducer(initialCartState, builder => {
  builder.addCase(
    CartActions.addItemToCart,
    (state, action: PayloadAction<Product>): CartState => {
      console.log(action);
      const id = action.payload.id;
      const product = action.payload;
      const cartItem = state.cartItems.find(item => item.id === id);
      if (!cartItem) {
        const newCartItem: CartItem = {
          id,
          qty: 1,
          product,
          totalPrice: product.price,
        };

        state.cartItems.push(newCartItem);

        return state;
      } else {
        const updated = state.cartItems.map(item => {
          if (item.id === id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });

        state.cartItems = updated;

        return state;
      }
    }
  );
});

export default cartReducer;
