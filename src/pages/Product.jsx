import { NavLink } from "react-router-dom";
import { useContext, useState} from "react"
import {CartState} from "../context/productsContext"
import { CartListState } from "../context/CartContext"
import "./css/productCard.css"
import { useEffect } from "react";

import { AiFillHeart } from "react-icons/ai";
import { WishListState } from "../context/WishlistContext"

export default function Product({product}) {
   const { state :{products}, dispatch,getProductByID } = CartState()
     const { wishlistdispatch, addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
     const { cartdispatch, addProductToCart,state:{cart},handlecartlistCheck} = CartListState()
//   const [colors,setColor] = useState(false)
   //   console.log("WIshlist items in prod page ",colors)

const showinDetailHandler = (id) =>{
   getProductByID(id)
}
const addtoWishListHandler = (product) =>{
   // wishlistdispatch({type: "COLOR",payload:product})
   addProductToWishList(product)
 

 
} 
// useEffect(()=>{  setColor(handlewishlistCheck(product))},[colors])
const CartListHandler = (product) =>{

   addProductToCart(product)
}




   return    <div  class="main">    


    {/* card logic starts */}

    <div class="card">

    <div  style = {{color: handlewishlistCheck(product)?"red":"black"}}  className="menu" onClick={() => addtoWishListHandler(product)}> 
<AiFillHeart   />
     </div>
<div class="image">
   <img src={product.image} />
</div>
<div class="title">
 <h1>
 {product.title}</h1>
</div>
<div class="des">
 {/* <p>{product.description}...</p> */}
 <button  style = {{textDecoration:"none" , color:"white" ,border:"none"}} >

<NavLink   className = "navlink-btn"  to = {`/products/${product._id}`} >Show in Detail</NavLink>
                 
        
</button>
<div>
<button   onClick = {()=> CartListHandler(product)} >
{
   handlecartlistCheck(product)?"Remove From Cart":"Add to Cart"
}


</button>

</div>
</div>
</div>



    

       

</div>
    }
   
