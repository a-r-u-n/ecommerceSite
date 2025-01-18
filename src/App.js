
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import ShopCategory from './pages/ShopCategory';
import bannerMens from './Assets/banner_mens.png'
import bannerWomens from './Assets/banner_women.png'
import bannerKids from './Assets/banner_kids.png'

function App() {
  return(
    <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />}></Route>
<Route path="/login" element={<LoginSignup />} />
<Route path="/mens" element={<ShopCategory banner={bannerMens} category="men" />} />
<Route path="/womens" element={<ShopCategory banner={bannerWomens} category="women" />} />
<Route path="/kids" element={<ShopCategory banner={bannerKids} category="kid" />} />
<Route path="/cart" element={<Cart />} />
<Route path="/product" element={<Product />}/>
<Route path=":productId" element={<Product />}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
