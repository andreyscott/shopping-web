import './index.css';
import Example from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Login } from './Pages/Login';
import Product  from './Pages/Product';

export default function App() {
  return (
    <BrowserRouter>
     <Example />
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/product' element={<Product /> } />
    <Route path="/products/:id" element={<Product />} />
    <Route path='/contact' element={<Contact  />} />

    <Route path='/login' element={<Login /> } />
  

    </Routes>
    </BrowserRouter>
  )
}