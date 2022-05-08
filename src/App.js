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

export default function App() {
  return (
    <BrowserRouter>
     <Example />
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact  />} />
    <Route path='/login' element={<Login /> } />
    </Routes>
    </BrowserRouter>
  )
}