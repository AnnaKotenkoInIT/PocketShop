import { api } from './client';
import { request } from './utils';
import { Cart, CartsResponse } from './apiCartsTypes';

export const cartsApi = {
  getAll: async () => {
    const data = await request<CartsResponse>(api.get('/carts'));
    return data.carts;
  },

  getById: (id: number) => request<Cart>(api.get(`/carts/${id}`)),
};
