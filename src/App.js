import './index.css';
import Example from "./components/Footer";

export default function App() {
  return (
   <div>
   <Example />
     <div className='w-full '>
     <p className='text-center text-cyan-400 bg-pink-400 border-4 rounded-lg'>
      <h1>Welcome to the React App</h1>
     </p>
     </div>
   </div>
  )
}