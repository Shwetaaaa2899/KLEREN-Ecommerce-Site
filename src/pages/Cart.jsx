import {CartListState } from "../context/CartContext"
import { useState,useEffect } from "react"
import { NavLink ,useNavigate} from "react-router-dom"
import { AuthContext} from "../context/authcontext"
import { toast } from "react-toastify"
import "./css/productCard.css"
import { AiFillHeart } from "react-icons/ai";
import { WishListState } from "../context/WishlistContext"
export default function Cart() {
const  navigate = useNavigate()
 const {addProductToCart,state:{cart},AddProductQuantIncart,RemoveProductQuantIncart
 ,IsQuantityGreaterThanOne,CheckForPaymentHandler }= CartListState()
 const { token} = AuthContext()
 
 const { wishlistdispatch, addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
    

const CartListHandler = (product) =>{
  toast("removed")
   addProductToCart(product)
}
const addtoWishListHandler = (product) =>{
    // wishlistdispatch({type: "COLOR",payload:product})
    addProductToWishList(product)
  
 
  
 } 
const  CartQUantHandler= ({product,type}) =>{
 type ==="increment"?AddProductQuantIncart({product,type})
 :RemoveProductQuantIncart({product,type})
}
    

    return <div>
{
cart.length>0?cart?.map((product) =>    <div class="card">


 
 <h1>{product.title}</h1>
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
<div class="title">
<h3>Quantity : {IsQuantityGreaterThanOne(product)}</h3>
</div>

<button onClick = {()=>CartListHandler(product) }> Remove From Cart </button>

<button   onClick = {()=>CartQUantHandler({product,type:"increment"}
)
}
> +</button>
<button   onClick = {()=>CartQUantHandler({product,type:"decrement"}) }> -</button>
        </div>)
        :   
        <div>
            
           <h1>Your cart is empty</h1>
                <button onClick = {()=> navigate("/products")} >Let's Explore</button>
            
        </div> 

        
     
}

{
    token &&  cart.length>0 &&    <button  onClick = {CheckForPaymentHandler}><NavLink to ="/checkout">CheckOut For Payment</NavLink></button> 
   }
      
     </div>
}