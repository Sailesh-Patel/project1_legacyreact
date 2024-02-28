import axios from "axios";
import { useState, useEffect } from "react";


function ItemCreate(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")


    return (<form onSubmit={e => {
                e.preventDefault();
                axios.post("http://localhost:8081/item/create",
                { name, price, quantity })
                .then(response => {
                    console.log(response);
                    setName("");
                    setPrice("");
                    setQuantity("");

                }).catch(err => console.error(err))
        }}>
                    <label htmlFor="Name">Name</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="Name"
                        firstname="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <br /><label htmlFor="price">Price</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="price"
                        lastname="price"
                        type="text"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                    />

                    <br /><label htmlFor="quantity">Quantity</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="quantity"
                        lastname="quantity"
                        type="text"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        required
                    />
                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
            </form>

        )
    }
    export default ItemCreate;
