
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import ShopCategory from './pages/ShopCategory';


function App() {
  return(
    <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />}></Route>
<Route path="/login" element={<LoginSignup />} />
<Route path="/mens" element={<ShopCategory category="mens" />} />
<Route path="/womens" element={<ShopCategory category="womens" />} />
<Route path="/kids" element={<ShopCategory category="kids" />} />
<Route path="/cart" element={<Cart />} />
<Route path="/product" element={<Product />}/>
<Route path=":productId" element={<Product />}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
