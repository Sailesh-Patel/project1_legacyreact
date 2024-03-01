import axios from "axios";
import { useState, useEffect } from "react";
import ItemManager from "./ItemManager";
import { useNavigate, useParams } from "react-router-dom";

function ItemEdit(props) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const navigate = useNavigate();
    const params = useParams();


useEffect(function getItems() {

    axios.get("http://localhost:8081/item/get/" + params.id)
    .then((response) =>  {
        console.log("Response:", response);
        setId(response.data.id);
        setName(response.data.name);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
    }).catch(error => console.error(error));
}, []);

const editItem = (e) => {
    e.preventDefault();


        axios.patch("http://localhost:8081/item/update/" + params.id,
        {name, price, quantity })
        .then(response => {console.log(response);
        }).catch(error => console.error(error))

}



    return (<>
    <form onSubmit={editItem}>

    <br /><label htmlFor="Name">ID</label>
            <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                id="Id"
                type="Int"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />


            <br /><label htmlFor="Name">Name</label>
            <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                id="Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br /><label htmlFor="price">Price</label>
            <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                id="price"
                price="price"
                type="double"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <br /><label htmlFor="quantity">Quantity</label>
            <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                id="quantity"
                quantity="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <div className="mt-2">
                <button className="btn btn-secondary" type="submit">Update</button>
            </div>
    </form>
    </> 
     )
}

export default ItemEdit;