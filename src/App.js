import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { Home } from './Pages/Home';
import About  from './Pages/About';
import { Contact } from './Pages/Contact';
import  Login  from './Pages/Login';
import ProductPage from './Pages/Product';
import Products from './components/Products';
import Cart from './Pages/Cart';
import Nav from './components/Navbar';
import Register from './Pages/SignUp';
import Checkout from "./Pages/Checkout";

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
    <Route path='/register' element={<Register /> } />
    <Route path='checkout' element={<Checkout/> } />

    
  

    </Routes>
    </BrowserRouter>
  )
}