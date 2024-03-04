import React from 'react'
import "./Home.css";
import Product from './Product';
import ItemCard from './components/Items/ItemCard';

function Home(props) {

  


  return (
    <div className="home">
      <div className="home_container">
        {/* <img className="home_image" src="https://i.pinimg.com/originals/47/88/7a/47887a5167b6db91506466e691e0b9c2.jpg" alt="" /> */}

        <div className="home_row">
        {/* <Product id="111" name='Phone' price={100.00} quantity={10} image='https://images.bauerhosting.com/affiliates/sites/8/2020/05/smartphones-2023-.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80' /> */}

{/* <Product /> */}

        {/* <Product id="111" name='Phone' price={100.00} quantity={10} image='https://images.bauerhosting.com/affiliates/sites/8/2020/05/smartphones-2023-.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80' /> */}

<ItemCard />

        </div>

        {/* <div className="home_row">

        </div>

        <div className="home_row">

        </div> */}
      </div>
    </div>
  )
}

export default Home
