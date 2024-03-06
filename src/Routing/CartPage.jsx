import Subtotal from "../components/Cart/Subtotal";
import CartItem from "../components/Cart/CartItem";
import "../components/Cart/CartItem.css";
import "./CartPage.css";
import { useStateValue } from "../StateProvider";
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from 'react-router-dom';

function CartPage(props) {
const [{basket}, dispatch] = useStateValue();

    return (
        <div className="cartPage">
            <div className="cartPage_left">
                <div>
                    <h2 className="cartPage_title">Your Shopping Basket</h2>

{basket.map(item => (
    <CartItem
    key={item.id + "" + item.name}
    id={item.id}
    name={item.name}
    price={item.price}
    quantity={item.quantity}
    image={item.image}
    />
))}


                </div>
            </div>
            <div className="cartPage_right">
                <Subtotal />
                <Link className="cartPage_Checkout" to="/Checkout">Proceed to Checkout</Link>

            </div>

        </div>
    );
}

export default CartPage;