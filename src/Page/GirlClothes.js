import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Girls from '../components/Girls'

export default function Desktop9() {

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
            
                <img className="Cardimg1" src="/GirlClothes/Group 382.png" alt="kiddes"/>

        </div>

         <div class="Girls-clothes container">
             <div class="row">

                    {product.map(product =>(
            <Girls products={product}/>

          ))}
                    {/* <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 48.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>New Arrival Party Gown</h5> <h6> &#8358;6,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 31.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Baby Tiered Dress</h5> <h6> &#8358;4,800</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 54.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>New Girls Button Down With Belt</h5> <h6> &#8358;8,000</h6></div> */}
                </div>
        </div>

{/* 
        <div class="Girls-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 27.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Pyjamas Long Sleeve for Girls</h5> <h6> &#8358;7,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 15.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Fitted Short Sleeve </h5> <h6> &#8358;4,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 68.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Short Sleeve Shirt and Knicker</h5> <h6> &#8358;7,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 73.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Fit and Flare Outing Dress</h5> <h6> &#8358;10,000</h6></div>
            </div>
        </div> */}

{/* 
        <div class="Girls-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 72.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Satin Baby Girl Dress</h5> <h6> &#8358;6,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 21.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Babies First Wear Overall</h5> <h6> &#8358;10,000</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 47.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Girl's Party Gown </h5> <h6> &#8358;7,500</h6></div>
                    <div class="col-md-3 d-flex flex-column"><img className="Girls-clothes-img" src="/GirlClothes/Clothes 59.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5> Children's Fashion Hoodie</h5> <h6> &#8358;9,000</h6></div>
            </div>
        </div>             */}
 </div>
    );  
}
