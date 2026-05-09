export interface Cart {
  id: number;
  products: any[];
  total: number;
  userId: number;
}

export interface CartsResponse {
  carts: Cart[];
}
