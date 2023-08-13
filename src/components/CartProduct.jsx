import "./CartProduct.css"
import { WishListState } from "../context/WishlistContext"
import {CartListState } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
export const CardProduct = ({item}) =>{
    const navigate = useNavigate()
    const {AddProductQuantIncart,RemoveProductQuantIncart
         ,RemoveProductFromcart}= CartListState()
    
    const { removeProductToWishList,
        handlewishlistCheck, addProductToWishList} = WishListState()
    const  CartQUantHandler= ({item :product,type}) =>{

        type ==="increment"?AddProductQuantIncart({product,type})
        :RemoveProductQuantIncart({product,type})
       }
       const WishListHandler = (item) =>{

   if(handlewishlistCheck(item)){

        removeProductToWishList(item)
     }
     else{
     
      
        addProductToWishList(item)
      
     }
     
    }
    return <div className="card-conatiner">
    <div className="section-one">

<img className="image" src = {item.image} />
{/* ---item's  details -- */}
<div className="product-info" >
    <h5>{item.title}</h5>
    <small>{ 
   item.genre ==="men"?"Men's Wear"
   :item.genre ==="women"?"WoMen's Wear"
   :item.genre === "sports"?"Sports Wear"
   : item.genre ==="casual"?"Casual Wear"
   :
   "Kid's Wear"
}</small>

<div className="price-section">
<strong>₹ {
item?.price  }</strong>
<small> <span  className = "mrp">MRP :₹
{item.price+1000} 
</span> (50% off)</small>
</div>

<div className="price-section action-button">
<button   onClick = {()=>CartQUantHandler({item,type:"increment"}
)
}
> +</button>

<button>{item?.qty && item?.qty >=1 ? item?.qty:
1}</button>
<button   onClick = {()=>CartQUantHandler({item,type:"decrement"}) }> -</button>

</div>
    </div>



 </div>

    <div className="section-two">

    <span  onClick = {()=> RemoveProductFromcart(item)} >REMOVE</span>
<span  onClick={() => WishListHandler(item)}>
{handlewishlistCheck(item)?"REMOVE FROM WISHLIST":"MOVE TO WISHLIST"}</span>
    </div>


    </div>
    
}