import {WishListState } from "../context/WishlistContext"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export default function WishList() {
    const navigate = useNavigate()


    const {value:{wishlist} ,addProductToWishList,handlewishlistCheck } = WishListState()
    const addtoWishListHandler = (product) =>{
  addProductToWishList(product)
  } 
   
   
    return <div>
{
wishlist.length>0?
wishlist?.map((product) =><div>

<div  style = {{ color : handlewishlistCheck(product)?"red":"grey"}} className="menu" onClick={() =>   addProductToWishList(product)}> 
<AiFillHeart  />
     </div>
 <h1>{product.title}</h1>
<button >Add to cart</button>
        </div>)
        :
       <div> <h3>No data in wishlist as of now</h3>
        <button onClick = {() => navigate("/products") } >Let's Explore</button>
        </div>
}

      
    </div>
}