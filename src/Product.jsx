import React from "react"
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, name, price, image, quantity }) {
const [{basket}, dispatch] = useStateValue();
console.log("basket:", basket)

const addToBasket =() => {
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            key: id + "" + name,
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            image: image,
        },
    });
};

    return (
        <div className="product">
            <div className="product_info">
                <p>{name}</p>

                <div className="product_quantity">
                    {Array(quantity).fill().map((_, i) => (
                    <p>1</p>
                    ))}
                </div>                
                </div>
                    <img src={image} alt=""></img>

                <p className="product_price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div>
                <i class="bi bi-dash-lg"></i>
<div className="quantity">0</div>
                <i class="bi bi-dash-lg"></i>
                </div>


                <button onClick={addToBasket}>Add to basket</button>
                </div>
    )
}

export default Product
