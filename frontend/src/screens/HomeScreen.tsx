import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import Product from '../entities/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="">
        <div className="container px-5 pb-20 mx-auto">
          <h2 className="text-4xl text-gray-800 py-8 font-semibold tracking-tighter">
            Latest Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
