import { Link } from 'react-router-dom';
import Product from '../entities/Product';
import Rating from './Rating';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="p-4 w-full rounded border border-gray-300">
        <Link to={`/product/${product._id}`}>
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              // src="https://dummyimage.com/420x260"
              src={product.image}
            />
            L
          </div>
        </Link>
        <div className="space-y-2">
          <h3 className="text-gray-500 mt-4 text-xs tracking-widest title-font mb-1">
            {product.brand}
          </h3>
          <Link to={`/product/${product._id}`}>
            <h2 className="text-gray-900 title-font text-lg font-medium truncate">
              {product.name}
            </h2>
          </Link>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <p className="mt-1">${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
