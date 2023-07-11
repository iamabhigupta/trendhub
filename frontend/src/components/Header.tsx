import { FaCartShopping, FaUserLarge } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="text-white bg-gray-950 w-full">
      <div className="flex justify-between items-center container mx-auto px-5 py-4">
        <div className="text-[1.6rem] tracking-tighter font-bold">
          ProShop <span className="text-rose-500">.</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-1">
            <FaCartShopping size={20} />
            Cart
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaUserLarge size={20} />
            Sign In
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
