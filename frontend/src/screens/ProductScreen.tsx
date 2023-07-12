import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Rating from '../components/Rating';
import Product from '../entities/Product';

const ProductScreen = () => {
  const [products, setProducts] = useState<Product[]>();

  const { id: productId } = useParams();
  const product = products?.find((p) => p._id === productId);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (!product) {
    return <p>No Product</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pb-20 mx-auto">
        <Link to="/">
          <button className="text-white mb-16 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">
            Go Back
          </button>
        </Link>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <Rating value={product.rating} />
              <span className="text-gray-600 ml-3">
                {product.numReviews} Reviews
              </span>
              <div className="w-[1px] h-6 bg-gray-500 mx-5" />
              <div>
                {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
              </div>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-7">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                disabled={product.countInStock === 0}
                className="flex ml-auto text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded"
              >
                Add to cart
              </button>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
