import { useQuery } from '@tanstack/react-query';

import APIClient from '../services/api-client';
import Product from '../entities/Product';
import { PRODUCTS_URL } from '../constants';

const useGetProduct = (productId: string) => {
  const apiClient = new APIClient<Product>(`${PRODUCTS_URL}/${productId}`);

  return useQuery({
    queryKey: ['product', productId],
    queryFn: apiClient.getAll,
  });
};

export default useGetProduct;
