import React, { useState } from 'react'

function AddToCart(props) {
    const {id, name, price, quantity, iamge} = props;

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState("")
    const [item, setItem] = useState("")
    const [amount, setAmount] = useState(1)

    const setDecrease =() => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease =() => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };


    const addToCart =(item) => {
        const newItem = {
            ...item,
            count:1
        }
        setItem([...itemsInCart, newItem,])
    };

  return (
    <div>


<NavLink to="/Cart" onClick={() => addToCart(id, name, price, quantity, image)}>
<button>Add To Cart</button>
</NavLink>



      
    </div>
  )
}

export default AddToCart
