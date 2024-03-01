import axios from "axios";
import { useState, useEffect } from "react";
import ItemManager from "./ItemManager";
import ItemDelete from "./ItemDelete";
import ItemEdit from "./ItemEdit";


function ItemGetTable(props) {

    const [items, setItems] = useState([]);


    useEffect(function getItems() {

        axios.get("http://localhost:8081/item/get")
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error))
    }, []);


    const itemComponents = []

    for (const item of items) {
        console.log("Items:", props.item);
        itemComponents.push(
            <ItemManager
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
            />
        )
    }

    return (
        <div>
            <br />
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>  
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">         
                   {itemComponents}  
                </tbody>
            </table>

        </div>
    );
}

export default ItemGetTable;