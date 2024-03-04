import './App.css';
import { Routes, Route, Router, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Routing from './Routing';
import HomePage from './RoutingPages/HomePage';

import CartPage from './RoutingPages/CartPage';
import ItemsPage from './RoutingPages/ItemsPage';
import ItemEdit from './components/Items/ItemEdit';
import Header from './Header';
import Login from './components/Login';



function App() {
  return (
    <div>
<Routing />
<div className="container">

<Routes>
<Route path="/Login" element={<Login />}></Route>  
<Route path="/" element={<HomePage />}></Route>
<Route path="/ItemsPage" element={<ItemsPage />}></Route>
<Route path="/CartPage" element={<CartPage />}></Route>
<Route path="/ItemEdit/:id" element={<ItemEdit />}></Route>

</Routes>

</div>
    </div>
  );
}

export default App;
