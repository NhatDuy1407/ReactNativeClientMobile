export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface CartItem {
  id: number;
  qty: number;
  product: Product;
  totalPrice: number;
}
