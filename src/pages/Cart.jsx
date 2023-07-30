import {CartListState } from "../context/CartContext"
import { useState,useEffect } from "react"
import { NavLink ,useNavigate , Link} from "react-router-dom"
import { AuthContext} from "../context/authcontext"
import { toast } from "react-toastify"
import { CardProduct } from "../components/CartProduct"
import "./css/WishList.css"
import "./css/Cart.css"
import Product  from "./Product"
import { AiFillHeart , AiFillTags } from "react-icons/ai";

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
    const total =  cart.reduce((acc,item) =>  acc +=  item?.qty && item?.qty >=1 ? item?.qty * item.price
      :
      item?.price  
  , 0 )

  const [paymentModal , setPaymentModal] = useState(false)
  const openPaymentModal = () =>  setPaymentModal(true)
  const closePaymentModal = () => setPaymentModal(false)
    return <div  className="cart-container">
  <div className="header-section">
 {cart.length>0?<div>
  <h4> My Cart  ({cart?.length }  )</h4> 

  <div className = "botom-section">

<div className="wishlist-wrapper">


{
cart.length>0
 &&
 cart?.map((product) => <CardProduct key={product._id} item = {product} />) 
 
       
        
     
}


     </div>

       <div className="card-payment-container">
    
   

      <h3 className="price-card-header">Price Details</h3>

      <div className = "products-details">
       <p>
<strong>SubTotal</strong>: {total}
       </p>
       <p>
       <strong>Discount</strong>: 50%

       </p>
       <p>
   <strong>
       Total 
       </strong>
     : {total / 2}

       </p>
       <p>
<Link to = "$">Apply Coupon
<AiFillTags /></Link>

       </p>
      </div>
      <div>
      {
    token &&  cart.length>0 &&     
      <button   className= "button" > <NavLink to ="/checkout">CheckOut For Payment</NavLink></button> 
   }
      
      </div>

      <hr />
    </div>
    

   </div>
 </div>
 
 :<div>
            
            <h1>Your cart is empty</h1>
            <button   className= "button"onClick = {()=> navigate("/products")} >Let's Explore</button>
             
         </div> 
 
 }
  </div> 


  </div>
}
   
 {/* <div class="card">


 

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
 <h1>
Price {product.price}</h1>
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
        </div>) */
      }