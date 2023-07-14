import { Link, useParams } from 'react-router-dom';

import Rating from '../components/Rating';
import useGetProduct from '../hooks/useGetProduct';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProduct(productId!);

  if (isLoading) return 'Loading';
  if (error || !product) throw error;

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
