import {WishListState } from "../context/WishlistContext"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { CartListState } from "../context/CartContext"
// import "./css/MainContainer.css"
import "./css/WishList.css"
import Product  from "./Product"
export default function WishList() {
    const navigate = useNavigate()

    const { cartdispatch, addProductToCart,state:{cart},handlecartlistCheck} = CartListState()

    const {value:{wishlist} ,addProductToWishList,handlewishlistCheck } = WishListState()
    const addtoWishListHandler = (product) =>{
  addProductToWishList(product)
  } 
  const CartListHandler = (product) =>{

    addProductToCart(product)
 }
 
   
    return   <div className="wishlist-wrapper">
{
wishlist.length>0?wishlist?.map((product) => <Product key={product._id} product = {product} wishlist = {1} />)

        :
       <div> <h3>No data in wishlist as of now</h3>
        <button   className= "button" onClick = {() => navigate("/products") } >Let's Explore</button>
        </div>
        


}
    
    </div>
}
{/* <div  class="main">    
    <div class="card">
<div  style = {{ color : handlewishlistCheck(product)?"red":"grey"}} className="menu" onClick={() =>   addProductToWishList(product)}> 
<AiFillHeart  />
     </div>
<div class="title">
 <h1>
 {product.title}</h1>
</div>
 <div class="image">
   <img src={product.image} />
</div>

<div class="des">
<label>Price:</label>{product.price}
<button   onClick = {()=> CartListHandler(product)} >
{
   handlecartlistCheck(product)?"Remove From Cart":"Add to Cart"
}


</button>
        </div>
        </div>
        </div>) */}