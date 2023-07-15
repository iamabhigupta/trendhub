import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { RootState } from '../store';
import Product from '../entities/Product';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { addDecimals } from '../utils/cartUtils';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const addToCartHandler = async (product: Product, qty: number) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping'); // Navigate to the checkout page
  };

  return (
    <>
      <section className="">
        <div className="container px-5 pb-20 mx-auto">
          <h2 className="text-4xl text-gray-800 py-8 font-semibold tracking-tighter">
            Latest Products
          </h2>
          <div>
            {cartItems.length === 0 ? (
              <p>
                Your cart is empty{' '}
                <Link to="/" className="underline font-semibold">
                  Go back
                </Link>
              </p>
            ) : (
              <div className="flex justify-between gap-10  w-full">
                <div className="flex-[2] flex flex-col gap-5">
                  {cartItems.map((item: Product) => (
                    <div key={item._id} className="flex justify-between gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 rounded-md"
                      />
                      <h2 className="text-lg w-72 font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-lg font-semibold text-gray-800">
                        $ {item.price}
                      </p>
                      <div>
                        {item.countInStock > 0 && (
                          <select
                            className="p-2 border rounded"
                            value={item.qty}
                            onChange={(e) =>
                              addToCartHandler(item, Number(e.target.value))
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                      <div>
                        <MdDelete
                          onClick={() => removeFromCartHandler(item._id)}
                          size={25}
                          className="text-gray-800 cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-2 rounded-md flex-1">
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">Summary</h2>
                    <div className="flex justify-between mt-4">
                      <p className="text-lg font-semibold">Subtotal:</p>
                      <p className="text-lg font-semibold">
                        {/* Calculate subtotal */}$
                        {addDecimals(
                          cartItems.reduce(
                            (total, item) => total + item.price * item.qty,
                            0
                          )
                        )}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-lg font-semibold">Shipping:</p>
                      <p className="text-lg font-semibold">$0</p>{' '}
                      {/* Add shipping logic if required */}
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-lg font-semibold">Total:</p>
                      <p className="text-lg font-semibold">
                        {/* Calculate total */}$
                        {addDecimals(
                          cartItems.reduce(
                            (total, item) => total + item.price * item.qty,
                            0
                          )
                        )}
                      </p>
                    </div>
                    <button
                      className="mt-6 py-3 px-6 bg-blue-500 text-white font-semibold rounded"
                      onClick={checkoutHandler}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartScreen;
