import React from 'react'
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import { useState, useEffect } from "react";
import './ItemCard.css';
import ItemManager from './ItemManager';



function ItemCard(props) {

    const [items, setItems] = useState("");
    let [count, setCount] = useState(0);

    const [{ basket }, dispatch] = useStateValue();
    console.log("basket:", basket)

   
   function addToBasket() {

}


    
    function getCard() {

        axios.get("http://localhost:8081/item/get")
            .then(response => {
                setItems(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))
    }
    useEffect(getCard, []);



    const displayItems = [];

    for (const item of items)

        displayItems.push(
            <div className='col-4' key={item.id} >
                <div className='card'>
                    <div className='card_body'>

                        <div className='card_text'>

                            <p className='card_image'><b></b><img width="200px" src={item.image} alt=""></img></p>
                            <p className='card_name'> <b>Name:</b> {item.name}</p>
                            <p><b>Quantity:</b> {item.Quantity}</p>

                            <div className="product_price_quantity">
                                <div className="product_price">
                                    <div className="buttons">
                                        <i onClick={() => setCount(count - 1)} className="decrement" class="bi bi-dash-lg"></i>
                                        <div id="quantityChange" className="quantity">1</div>
                                        <i onClick={() => setCount(count + 1)} className="increment" class="bi bi-plus-lg"></i>

                                        <small>£</small>
                                        <strong>{item.price}</strong>
                                    </div>
                                    <button onClick={addToBasket}>Add to Basket</button>
                                </div>
                            </div>



                            {/* <p><button type="button" className="btn btn-danger" onClick={() => {
                axios.delete("http://localhost:8081/item/delete/" + item.id)
                    .then(res => {


                        axios.get("http://localhost:8081/item/get")
                            .then(response => {
                                setItems(response.data)
                                console.log(response);
                            })
                            .catch(err => console.error(err))
                
                    })
                    .catch(err => console.error(err))
                    
            }}>DELETE</button></p> */}

                        </div>
                    </div>
                </div>

            </div>

        )

    let increment = (id) => {
        console.log(id);
    }
    let decrement = (id) => {
        console.log(id);
    }
    let update = () => { }


    return (
        <>
            <br />
            {/* <button className="btn btn-primary btn-lg " onClick={handleClick}>Display all Items</button> */}
            <div className='container'>
                <div className='row'>

                    {displayItems}
                </div>
            </div>
        </>
    );
}

export default ItemCard
