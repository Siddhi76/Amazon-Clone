import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import { Routes,Route,useLocation } from 'react-router-dom';
import Products from './Screen/Products/products';
import Footer from './Components/Footer/footer';
import Cart from './Screen/Cart/cart';
import All from './Screen/All/all';


function App() {
  const location = useLocation();
  const headerFooterHides =['/all'];
  const shouldHide = headerFooterHides.includes(location.pathname);

  return (
    <div className="App">
    {!shouldHide && <Navbar />}
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/all' element={<All/>} />
    </Routes >
    {!shouldHide && <Footer /> }
    </div>
  );
}


export default App;
