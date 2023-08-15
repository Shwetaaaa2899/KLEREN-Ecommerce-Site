import { NavLink } from "react-router-dom";
import { useContext, useState} from "react"
import {CartState} from "../context/productsContext"
import { CartListState } from "../context/CartContext"
import "./css/productCard.css"
import { toast } from 'react-toastify'
import { useEffect } from "react";
import { AuthContext} from "../context/authcontext"
import { useNavigate , Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { WishListState } from "../context/WishlistContext"

export default function Product({product,wishlist : wishlistCheck}) {
   const { state :{products}, 
   dispatch,getProductByID } = CartState()
     const { wishlistdispatch,removeProductToWishList, 
      addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
     const { cartdispatch, 
      addProductToCart,state:{cart},handlecartlistCheck
   ,
   AddProductQuantIncart} = CartListState()
     const { state:{token , isLoggedIn}} = AuthContext()
const navigate = useNavigate()
const showinDetailHandler = (id) =>{
   getProductByID(id)
}
const WishListHandler = (product) =>{
   // console.log("my token is")
  if( token === null){
   toast("Please login first to shop your fav products")
navigate("/auth")
}
else if(handlewishlistCheck(product)){
   // console.log("I am in removing prod case with token")
   removeProductToWishList(product)
}
else{
   // console.log("I am in adding prod case with token")
 
   addProductToWishList(product)
 
}
}
const CartListHandler = (product) =>{

   if( token === null){

      toast("Please login first to add in cart products")
   navigate("/auth")
   }
   else  
   {
      if(cart?.some((item) => item._id === product._id)){
         navigate("/cart")
      }
      else{
         addProductToCart(product)

      }
 
   }
}




   return   <div   className="card">
<Link to = {`/product/${product._id}`}> 
<div className = "card-img">
<img  src={product.image} />
</div>
<div className="star-div">
   {product.star} ⭐
</div>
<div className = "card-info">
<h3 className = "card-title">{product.title}</h3>
<small>{ 
   product.genre ==="men"?"Men's Wear"
   :product.genre ==="women"?"WoMen's Wear"
   :product.genre === "sports"?"Sports Wear"
   : product.genre ==="casual"?"Casual Wear"
   :
   "Kid's Wear"
}</small>

<div className="price-details">
<p>Price:₹ {product.price}</p>

<p><span   className = "mrp" >MRP :₹ 
{product.price+1000} 
</span> (50% off)</p>
</div>
</div>





 </Link>

  <div  className = "icons-section">
 {/* style = {{color: handlewishlistCheck(product)?"red":"black"}}   */}
 <button  
  onClick={() => WishListHandler(product)}> 
  
  {
   handlewishlistCheck(product)?"Remove From WishList"
   :
   
   "Add to WishList"
  }

  </button>


  <button  onClick = {()=> CartListHandler(product)} >
{
   handlecartlistCheck(product)?"Go to Cart"
   :"Add to Cart"
}


</button> 
{
   wishlistCheck   && handlecartlistCheck(product)
 &&

 <button  onClick = {()=> {
   AddProductQuantIncart({product,type:"increment"})
   toast.success("Cart Quantity increased successfullys")
 }
 }
 >
+1 in Cart


</button> 
}    

     </div>
        


</div>



   
}








