import { useParams } from "react-router-dom";
import { useEffect } from "react"
import {CartState} from "../context/productsContext"
import { CartListState } from "../context/CartContext"
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./css/productCard.css"
import { AiFillHeart } from "react-icons/ai";
import { WishListState } from "../context/WishlistContext"
const ProductDetail = () =>{
    const { productID } = useParams()
    const { token,userState:{login}} = AuthContext()
  
    
    const { state :{ ProductToBeDetailed}, getProductByID } = CartState( )
    const { wishlistdispatch, addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
     
    const { handlecartlistCheck, addProductToCart } = CartListState()
    const addtoWishListHandler = (product) =>{
        // wishlistdispatch({type: "COLOR",payload:product})
        addProductToWishList(product)
      
     
      
     } 
    const navigate = useNavigate()
   
    const CartListHandler =(product) =>{
      console.log("token",token,login)
 login ?addProductToCart(product):
 toast("Please sign in first to continue")
//  navigate("/auth")
     }

     
     
    useEffect(()=>{getProductByID(productID)},[])

return <>{
   ProductToBeDetailed && <div  class="main">   
<div class="card">
<div  style = {{color: handlewishlistCheck(ProductToBeDetailed)?"red":"black"}}  className="menu" onClick={() => addtoWishListHandler(ProductToBeDetailed)}> 
<AiFillHeart   />
     </div>
<div class="image">
   <img src={ProductToBeDetailed.image} />
</div>
<div class="title">
 <h1>
 {ProductToBeDetailed.title}</h1>
</div>

<label>Price:</label>{ProductToBeDetailed.price}

<button  onClick = { ()=> CartListHandler(ProductToBeDetailed)} >

 {handlecartlistCheck(ProductToBeDetailed)?"Remove From Cart":"Add to Cart"} 
  
</button>


 


 </div>
 </div>
}


</>

}
export default ProductDetail;