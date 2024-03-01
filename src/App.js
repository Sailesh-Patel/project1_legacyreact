import './App.css';
import { Routes, Route, Router, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Routing from './Routing';
import HomePage from './RoutingPages/HomePage';

import CartPage from './RoutingPages/CartPage';
import ItemsPage from './RoutingPages/ItemsPage';



function App() {
  return (
    <div>
<Routing />
<div className="container">

<Routes>
<Route path="/" element={<HomePage />}></Route>
<Route path="/ItemsPage" element={<ItemsPage />}></Route>
<Route path="/CartPage" element={<CartPage />}></Route>
</Routes>

</div>


<h1>App.js</h1>

    </div>
  );
}

export default App;
