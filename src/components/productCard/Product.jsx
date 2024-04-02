import { CartListState } from "../../context/cartContext"
import "./productCard.css"
import { toast } from 'react-toastify'
import { AuthContext} from "../../context/authcontext"
import { useNavigate , Link } from "react-router-dom";
import { WishListState } from "../../context/wishlistContext"

export default function Product({product,wishlist : wishlistCheck}) {
 
     const { removeProductToWishList, 
      addProductToWishList,handlewishlistCheck} = WishListState()
     const { 
      addProductToCart,state:{cart},handlecartlistCheck
   ,
   AddProductQuantIncart} = CartListState()
     const { state:{token }} = AuthContext()
const navigate = useNavigate()

const WishListHandler = (product) =>{
  if( token === null){
   toast("Please login first to shop your fav products")
navigate("/auth")
}
else if(handlewishlistCheck(product)){
   removeProductToWishList(product)
}
else{
 
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








