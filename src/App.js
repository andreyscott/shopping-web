import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import  Login  from './Pages/Login';
// import Product  from './Pages/Product';
import ProductPage from './Pages/Product';
import Products from './components/Products';
import Cart from './Pages/Cart';
import Example2 from './Pages/newLogin';
import Nav from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
     <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/product' element={<Products /> } />
    <Route path="/products/:id" element={<ProductPage />} />
    <Route path='/contact' element={<Contact  />} />
    <Route path='/cart' element={<Cart  />} />

    <Route path='/login' element={<Login /> } />
    <Route path='/register' element={<Example2 /> } />

    
  

    </Routes>
    </BrowserRouter>
  )
}