import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="bg-slate-900">
         <Navbar></Navbar>
       </div>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/cart" element={<CartPage></CartPage>}></Route>
       </Routes>
    </div>
  );
}

export default App;
