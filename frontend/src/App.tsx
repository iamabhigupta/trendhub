import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="h-full py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
