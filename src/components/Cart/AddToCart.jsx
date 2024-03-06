import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemManager from '../Items/ItemManager';

function AddToCart(props) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    const [items, setItems] = useState("")

    function getItems() {

        axios.get("http://localhost:8081/item/get/" + props.id)
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
                setImage(response.data.image);
            })
            .catch((error) => console.log(error));
           // e.preventDefault()
    
        }

    
    setTimeout(() => {
        axios.post("http://localhost:8081/cart/create/")
            .then((response) => {
                setName(response.data.name);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
                setImage(response.data.image);
            })
            .catch(err => console.error(err));
    }, 3000);


  return (
<button class="btn btn-success" onClick={getItems}>Add to Basket</button>
)

  }

export default AddToCart
