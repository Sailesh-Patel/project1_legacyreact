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

    // const itemComponents = []

    // for (const item of items) {
    //   console.log("Items:", item);
    //   itemComponents.push()
    //   axios.post("http://localhost:8081/cart/create/",
    //     { name, price, quantity, image })
    //     .then((response) => {
    //       console.log(response);
    //       setName(response.data.name);
    //       setPrice(response.data.price);
    //       setQuantity(response.data.quantity);
    //       setImage(response.data.image);
    //     }).catch(err => console.error(err))
    // }




  return (

    // <form onSubmit={getItems}>

      <div className="mt-2">
        <button class="btn btn-success" onClick={getItems}>Add to Basket</button>

      </div>
    // </form>
  )
}

export default AddToCart
