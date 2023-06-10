import { NavLink } from "react-router-dom";
import { useContext, useState} from "react"
import {CartState} from "../context/productsContext"
import { CartListState } from "../context/CartContext"
import "./css/productCard.css"
import { useEffect } from "react";
import { AuthContext} from "../context/authcontext"
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { WishListState } from "../context/WishlistContext"
import { toast } from "react-toastify";
export default function Product({product}) {
   const { state :{products}, dispatch,getProductByID } = CartState()
     const { wishlistdispatch,removeProductToWishList, addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
     const { cartdispatch, addProductToCart,state:{cart},handlecartlistCheck} = CartListState()
     const { token , isLoggedIn} = AuthContext()
const navigate = useNavigate()
const showinDetailHandler = (id) =>{
   getProductByID(id)
}
const WishListHandler = (product) =>{
   // console.log("my token is")
  if( token?.length<= 0){
   toast("Please login first to shop your fav products")
navigate("/auth")
}
else if(handlewishlistCheck(product)){
   // console.log("I am in removing prod case with token")
   removeProductToWishList(product)
}
else{
   console.log("I am in adding prod case with token")
 
   addProductToWishList(product)
 
}
}
   // wishlistdispatch({type: "COLOR",payload:product})
//    {token?<> handlewishlistCheck(product)?console.log("already present"):console.log("need to get added") </>
// :toast("Please login to add your fav products")
//    }
   // handlewishlistCheck(product)?removeProductToWishList(product):addProductToWishList(product)
 

 

// useEffect(()=>{  setColor(handlewishlistCheck(product))},[colors])
const CartListHandler = (product) =>{

   addProductToCart(product)
}




   return    <div  class="main">    


    {/* card logic starts */}

    <div class="card">

    <div  style = {{color: handlewishlistCheck(product)?"red":"black"}}  className="menu" onClick={() => WishListHandler(product)}> 
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
<label>Price:</label>{product.price}
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
{/* //des div ends */}
</div>




       

</div>

   
}