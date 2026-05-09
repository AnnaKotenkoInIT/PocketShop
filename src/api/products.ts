import { api } from './client';
import { request } from './utils';
import { Product, ProductsResponse } from './apiProductsTypes';

export const productsApi = {
  getAll: async () => {
    const data = await request<ProductsResponse>(api.get('/products'));
    return data.products;
  },

  getById: (id: number) => request<Product>(api.get(`/products/${id}`)),
};
