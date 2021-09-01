import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Girls from '../components/Girls'

export default function Shoes() {


 const [products, setProducts] = useState([{
  name: 'Sleep in Clothes',
  price: '4,599',
  img: '/homepageimg/Clothes-42.png'


}])
const [product, setProduct ]= useState([])
console.log(product)

const getProducts = async () => {
 let {data} = await axios.get("https://mommycare-e-commerce-lite.herokuapp.com/api/v1/item/items/")
 setProduct(data.data)
}

useEffect(() => {
  getProducts()
}, [products, setProducts])

    return (
        <div>
             <div class="top-img container-fluid">
               <img className="Cardimg1" alt="kiddies" src="\Shoes\shoe group.png"/>
                
            </div>

         <div class="Girls-clothes container">
                <div class="row">

                         {product.map(product =>(
            <Girls products={product}/>

          ))}


                    {/* <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 45 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Outdoor Leisure Shoe </h5> <h6> &#8358;6,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 19 1.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Indoor Cartoon Sandal Pink </h5> <h6> &#8358;3,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 32 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Low Denim Fashion </h5> <h6> &#8358;5,450</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 19 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Indoor Cartoon Sandal Blue </h5> <h6> &#8358;3,000</h6></div>
                */}
               
               </div>
        </div>


            {/* <div class="Girls-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img"src="/Shoes/Shoe 12 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Children Casual Shoe </h5> <h6> &#8358;3,500</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 56 1.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Girls Princess Shoe </h5> <h6> &#8358;4,300</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 5 11.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Children Running Shoe </h5> <h6> &#8358;6,500</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 23 1 (1).png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>High Top Rockstar Sneaker </h5> <h6> &#8358;7,200</h6></div>
                </div>
            </div>

            <div class="Girls-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 7 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Children Outdoor Sneakers </h5> <h6> &#8358;7,800</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 47 1.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Soft Sole Princess Shoe </h5> <h6> &#8358;4,900</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 37 2.png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Children Buckle Sandals </h5> <h6> &#8358;6,900</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/Shoes/Shoe 4 10 (1).png" alt=""/><img  className="star-img" src="/Stars/stars.png" alt=""/> <h5>Casual Shoe Sport Sneaker</h5> <h6> &#8358;6,000</h6></div>
                </div>
            </div> */}

            

        </div>


    )
}

