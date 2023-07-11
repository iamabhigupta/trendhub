import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className="h-full py-5">
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
