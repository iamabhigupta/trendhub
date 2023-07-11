import Product from '../entities/Product';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="p-4 w-full rounded border border-gray-300">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            // src="https://dummyimage.com/420x260"
            src={product.image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.brand}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product.name}
          </h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
