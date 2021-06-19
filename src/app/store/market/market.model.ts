export interface Product {
  id: number | string;
  title: string;
  description?: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  totalPrice: number;
  productImage?: string;
  distributor: string;
}

export interface Shop {
  totalPrice: number;
  products?: Product[];
}

export interface MarketState {
  shop: Omit<Shop, 'totalPrice'>;
  basket: Shop;
}
