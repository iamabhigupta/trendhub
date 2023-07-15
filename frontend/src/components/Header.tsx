import { FaCartShopping, FaUserLarge } from 'react-icons/fa6';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <header className="text-white bg-gray-950 w-full">
      <div className="flex justify-between items-center container mx-auto px-5 py-4">
        <Link to="/">
          <div className="text-[1.6rem] tracking-tighter font-bold">
            ProShop <span className="text-rose-500">.</span>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link to="/cart">
            <div className="flex justify-center items-center gap-1">
              <FaCartShopping size={20} />
              Cart{' '}
              {
                <div className="w-5 h-5 rounded-full text-xs bg-red-500 text-white flex justify-center items-center">
                  <p>
                    {cartItems.reduce((total, item) => total + item.qty, 0)}
                  </p>
                </div>
              }
            </div>
          </Link>
          <Link to="/login">
            <div className="flex justify-center items-center gap-1">
              <FaUserLarge size={20} />
              Sign In
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
