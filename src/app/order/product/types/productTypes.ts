import { Product } from '../../models/order.models';

export type ProductProps = {
  product: Product;
  onAddCart: (item: Product) => void;
};
