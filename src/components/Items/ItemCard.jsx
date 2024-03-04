import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import './ItemCard.css';



function ItemCard() {

    const [items, setItems] = useState("");




function getCard() {

        axios.get("http://localhost:8081/item/get")
            .then(response => {
                setItems(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))
        }
        useEffect(getCard,[]);



    const displayItems = [];

for (const item of items)

displayItems.push(
    <div className='col-4'  key = {item.id} >
        <div className='card'>
            <div className='card_body'>

                <div className='card_text'>

                    <p className='card_name'> <b>Name:</b> {item.name}</p>
                    <p><b>Price:</b> {item.price}</p>
                    <p><b>Quantity:</b> {item.Quantity}</p>
                    <p className='card_image'><b></b><img width="200px" src={item.image}></img></p>

                    
                   
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



  return (
    <>
    <br />
        {/* <button className="btn btn-primary btn-lg " onClick={handleClick}>Display all Items</button> */}
        <div  className='container'>
            <div className='row'>
            
                {displayItems}
            </div>
        </div>
    </>
  );
}

export default ItemCard
