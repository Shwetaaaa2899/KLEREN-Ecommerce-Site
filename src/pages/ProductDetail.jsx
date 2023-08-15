import { useParams } from "react-router-dom";
import { useEffect } from "react"
import {CartState} from "../context/productsContext"
import { CartListState } from "../context/CartContext"
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./css/productDetail.css"
import { AiFillHeart } from "react-icons/ai";
import { ClipLoader } from "react-spinners"; 
import { WishListState } from "../context/WishlistContext"
const ProductDetail = () =>{
    const { productID } = useParams()
    const { state:{token,isloggedIn}} = AuthContext()
  
  
    const { state :{ loading,ProductToBeDetailed},dispatch, getProductByID } = CartState( )
    const { wishlistdispatch,removeProductToWishList, addProductToWishList,setWishList,value:{wishlist,color},handlewishlistCheck} = WishListState()
     
    const { handlecartlistCheck, addProductToCart } = CartListState()
   
     const WishListHandler = (product) =>{
      // console.log("my token is")
     if( token === null ){
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
    const navigate = useNavigate()
   
    const CartListHandler =(product) =>{
      // console.log(product, token)
      if( token === null){

         toast("Please login first to add in cart products")
      navigate("/auth")
      }
      else 
      {
         

        addProductToCart(product)
      }
 

     }

     
 
    useEffect(()=>{

      
      getProductByID(productID)
   
   },[])
// const ProductToBeDetailed = {}

return <>

{
   loading?<ClipLoader loading= {true}/>
   :

    ProductToBeDetailed &&  

<div  className="main-div"> 

   <div className="left-div">
   <div class="image">
   <img src={ProductToBeDetailed.image} />
</div>

<div className="action-button-section">
<button  onClick = { ()=> CartListHandler(ProductToBeDetailed)} >

 {handlecartlistCheck(ProductToBeDetailed)?"Remove From Cart":"Add to Cart"} 
  
</button>

<button  onClick={() => WishListHandler(ProductToBeDetailed)}> 
  
  {
   handlewishlistCheck(ProductToBeDetailed)?"Remove From WishList"
   :
   
   "Add to WishList"
  }
</button> 
</div>


   </div> 
   <div className="right-div">
      <div className="product-details">
    <h1>
 {ProductToBeDetailed.title}</h1>
 <small> {ProductToBeDetailed.categoryName}'s wear</small>
      </div>
      <div className="price-info">
      <p>Rating: {ProductToBeDetailed.star} ⭐</p>
    
<p>Price:₹ {ProductToBeDetailed.price}</p>

<p><span   className = "mrp" >MRP :₹ 
{ProductToBeDetailed.price+1000} 
</span> (50% off)</p>
</div>
<div className="description">
<p><strong>Description: </strong>

{ProductToBeDetailed.description}
</p>
</div>
      </div>

  

 </div> 
}


</>

}
export default ProductDetail;



{/* <div class="card">
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


 


 </div> */}