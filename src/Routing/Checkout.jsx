import React from 'react'
import "./Checkout.css";
import Subtotal from "../components/Cart/Subtotal";
import { useStateValue } from "../StateProvider";
import CartItem from '../components/Cart/CartItem';



function Checkout() {
  const[{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      
      <div className="checkout_left">
      <div>
      <h2 className="checkout_title">Check Out</h2>

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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
