import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Girls from '../components/Girls'

export default function BoyClothes() {


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
               <img className="Cardimg1" alt="kiddes" src="/BoyClothes/Group 359.png"/>
            </div>

            <div class="Boy-clothes container">
            <div class="row">

                     {product.map(product =>(
            <Girls products={product}/>

          ))}
                
                    {/* <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/wears 7 1.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/> <h5>Baby Sleep Wear</h5> <h6> &#8358;3,000</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Bandana 9.png" alt=""/> <img className="star-img" src="/Stars/stars.png" alt=""/><h5>Baby Beep</h5> <h6> &#8358;1,400</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 21 (1).png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Baby First Wear</h5> <h6> &#8358;4,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 55.png"alt=""/><img className="star-img" src="/Stars/stars.png"alt=""/><h5>Baby Overall Dress</h5> <h6> &#8358;4,500</h6></div>
                 */}
                
                </div>
            </div>
{/* 
            <div class="Boy-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 50.jpg"alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Baby Cartoon  Wear</h5> <h6> &#8358;4,400</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/wears 4 1.png"alt=""/><img className="star-img" src="/Stars/stars.png"alt=""/><h5>Sleeveless top and Short</h5> <h6> &#8358;7,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clohes 11.png"alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Up and Down Complete</h5> <h6> &#8358;4,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 52.png"alt=""/><img className="star-img" src="/Stars/stars.png"alt=""/><h5>2-in-1 Dress</h5> <h6> &#8358;6,000</h6></div>
                </div>
            </div>

            <div class="Boy-clothes container">
            <div class="row">
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 10.png" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Spring Top</h5> <h6> &#8358;4,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 32.jpg"alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Designer Short</h5> <h6> &#8358;4,300</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 8.jpg" alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Spring Top</h5> <h6> &#8358;4,500</h6></div>
                    <div class="col-md-3 d-flex flex-column-md-3 d-flex flex-column"><img src="/BoyClothes/Clothes 30.jpg"alt=""/><img className="star-img" src="/Stars/stars.png" alt=""/><h5>Toddler Wear</h5> <h6> &#8358;4,500</h6></div>
                </div>
            </div> */}
            
        </div>
    )
}
