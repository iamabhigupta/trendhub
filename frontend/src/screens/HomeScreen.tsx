import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error?.data?.message || error.error}</p>;

  return (
    <>
      <section className="mt-20">
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
