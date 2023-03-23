import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductCategries from './components/ProductCategries';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <ProductCategries />
      <Products />
      <Navbar />
    </div>
  );
}

export default App;
