const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white bg-gray-950 w-full">
      <div className="container mx-auto px-5 py-4">
        <p className="text-center ">ProShop &copy; {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
