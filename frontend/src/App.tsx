import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
