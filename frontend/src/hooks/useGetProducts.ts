import { useQuery } from '@tanstack/react-query';
import { PRODUCTS_URL } from '../constants';
import Product from '../entities/Product';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Product[]>(PRODUCTS_URL);

const useGetProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getAll,
  });

export default useGetProducts;
