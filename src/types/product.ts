export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  model: string[];
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
