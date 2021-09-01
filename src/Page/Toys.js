import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Girls from '../components/Girls'
export default function Desktop10() {

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
               <img className="Cardimg1" alt="kiddies" src="/Toys/Group 381.png"/>
                
            </div>


            <div class="Toys container">
                <div class="row">

                   {product.map(product =>(
            <Girls products={product}/>

          ))}

                    {/* <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img" src="/Toys/teddy-3131050_1920 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Teddy Bear </h5> <h6> &#8358;8,000</h6> </div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img" src="/Toys/Toys 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/> <h5>Children Outdoor Game </h5> <h6> &#8358;4,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img" src="/Toys/Toys 17 1.png" alt="toys"/> <img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Outdoor Game </h5> <h6> &#8358;6,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img" src="/Toys/Toys 8 1.png" alt="toys"/> <img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Rechargeable Toy Car </h5> <h6> &#8358;8,700</h6></div>
                */}
               
               
                </div>
            </div>


            {/* <div class="Toys container">
                <div class="row">
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 21 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Kids Fun Balls</h5> <h6> &#8358;6,200</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 15 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Toddler Play Toy</h5> <h6> &#8358;4,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/teddy-bear-2771252_1920 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Teddy Bear</h5> <h6> &#8358;7,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 1 10.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Puzzles </h5> <h6> &#8358;3,500</h6></div>
                </div>
            </div>


            <div class="Toys container">
                <div class="row">
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 23 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Remote Control Plane  </h5> <h6> &#8358;5,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 36 2.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Children’s Educational </h5> <h6> &#8358;3,800</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 12 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Baby’s Play Toy </h5> <h6> &#8358;5,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="toys-img"  src="/Toys/Toys 16 1.png" alt="toys"/><img className="star-img" src="/Stars/stars.png" alt="star"/><h5>Hand Spinner Fidget </h5> <h6> &#8358;2,200</h6></div>
                </div>
            </div> */}

            
            
 </div>
    )
}
