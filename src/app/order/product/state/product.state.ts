import { Product } from '../../models/order.models';

export const productKey = 'product';

export interface ProductState {
  products: Product[];
}

export const initialProductState: ProductState = {
  products: [],
};
