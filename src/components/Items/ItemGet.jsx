import axios from "axios";
import { useState, useEffect } from "react";
import ItemManager from "./ItemManager";


function ItemGet(props) {

    const [items, setItems] = useState([]);
    const itemList = []

    function getItems(props) {



        axios.get("http://localhost:8081/item/get")
            .then(response => {
                console.log("Response:", response);
                setItems(response.data);
            })
            .catch(error => console.error(error));
    }
    useEffect(getItems, []);




    for (const item of items) {
        console.log("Items:", props.item);
        itemList.push(
            <ItemManager
                key={item.id + "" + item.name}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
            />
        )
    }

    return (
        <div>
            <br />
            <table className="table table-bordered, style=">
                <thead className="table-dark">
                    <tr>  
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>                      
                    </tr>
                </thead>
                <tbody className="table-group-divider">
             {itemList}
                </tbody>
            </table>
        </div>
    );
}

export default ItemGet;