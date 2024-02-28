import axios from "axios";
import {useState, useEffect} from "react";
import ItemManager from "./ItemManager";

function ItemGet() {

const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [quantity, setQuantity] = useState("")
const [items, setItems] = useState([])

    function getItems() {
        axios.get("http://localhost:8081/item/get")
        .then((response)=>{setItems(response.data)})
        .catch(console.log)
    }
    
    useEffect(()=>{getItems()},[])
    


    const itemList = []

    for (const item of items) {
        console.log("Items:", item);
        itemList.push(
            <ItemManager
                key={item.name + "" + item.quantity}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                id={item.id}

            />
        )

    }

    return (  

        <div>
        <h1>Item Get</h1>
    </div> );

}

export default ItemGet;