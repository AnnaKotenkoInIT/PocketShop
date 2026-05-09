import { useEffect, useState } from 'react';
import { Cart } from '../api/apiCartsTypes';
import { cartsApi } from '../api/cartsArchive';

export const useCarts = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await cartsApi.getAll();
      setCarts(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return { carts, loading, error, refetch: fetchCarts };
};
