import { useState , createContext, useContext,useReducer } from "react"
import cartReducer,{initialState} from "../reducer/cartreducer"
import { useEffect } from "react"
import { AuthContext} from "./authcontext"
   
export const CartListProviderKey = createContext()


 const CartListProvider = ({children}) =>{

    const [state,dispatch] = useReducer(cartReducer,initialState)
const { token} = AuthContext()

//  api call to get the cart data


const cartListCall = async() =>{

   
  
    try{
        

    const sendreq =await fetch("/api/user/cart",{
        method:"GET",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token
}
    })

    const response = await sendreq.json();
    console.log("received token from server fr wishlist",response)
    dispatch({type:"GET-CART",payload:response.cart})

}
    catch(e){
        console.log(e)
    }
   }


   useEffect(() =>{
   token &&  cartListCall() },[token])


   //api call to add product to wishlist
const IsQuantityGreaterThanOne = (product) =>{
  return  product.qty > 1?product.qty:1
}
const handlecartlistCheck = (product) =>  {
    return state?.cart?.some(item => product._id === item._id);
}
   const addProductToCart = async(product) =>{
    const products = product
  if(!handlecartlistCheck(product)){
    try{
        
                const passobj = {product}
                
                const sendreq =await fetch("/api/user/cart",{
                    method:"POST",
                    headers:{'Accept':'application/json',
                'Content-Type':'application/json',
                authorization : token},
                body:JSON.stringify(passobj)
                })
              
                const response = await sendreq.json();
                // console.log("received data  fr adding data in cart",response)
              
              dispatch({type:"ADD-TO-CART",payload:{product,cart:response.cart}})
             
            }
            catch{}
        
        }
  
  else{
   // console.log("remove case in context called")
    
  RemoveProductFromcart(products)
  }
} 
const RemoveProductFromcart = async(product) =>{
    console.log("data to remove is",product._id,product)
    try{
    
        const sendreq =await fetch(`/api/user/cart/${product._id}`,{
            method:"DELETE",
            headers:{'Accept':'application/json',
        'Content-Type':'application/json',
        authorization : token}
      
        })
      
        const response = await sendreq.json();
        // console.log("received data  after deleting from cart",response)
      
        dispatch({type:"REMOVE-FROM-CART",payload:response?.cart})
      

    }
    catch(e){}
}
  

//add quantity of product in cart

  
const AddProductQuantIncart = async({product,type}) =>{
    
    try{
    
      const requestedbody  = {action:{type}}
        const sendreq =await fetch(`/api/user/cart/${product._id}`,{
            method:"POST",
            headers:{'Accept':'application/json',
        'Content-Type':'application/json',
        authorization : token},
    body:JSON.stringify(requestedbody)
      
        })
        // .then((data) =>  data. json())
        //an array inside  one product is present
        const response = await sendreq.json();
        // console.log("received data  after qant + from cart",response)
      
        dispatch({type:"INCREASE-QUANTITY",payload:response?.cart})
      

    }
    catch(e){

    }
}

//remove quantity for product based on id
const RemoveProductQuantIncart = ({product,type}) =>{
  const filtered =  state?.cart.includes(product) &&
  state?.cart.map((prod)  => prod._id ===product._id ? {...prod,qty:prod.qty -1}:prod)
 
  

       dispatch({type:"DECREASE-QUANTITY",payload:filtered})
      
}
//function to checkout for payment
const CheckForPaymentHandler = () =>{
    const total = state?.cart.reduce((acc,product) => acc += product.price,0)
dispatch({type:"GET-TOTAL-PRICE",payload:total})
}

const  cartdispatch  = dispatch
    const valueToBePassed = {state,cartdispatch,addProductToCart,RemoveProductFromcart,cartListCall,handlecartlistCheck,AddProductQuantIncart,
        RemoveProductQuantIncart,IsQuantityGreaterThanOne
    ,CheckForPaymentHandler}

    return <CartListProviderKey.Provider value={valueToBePassed}>{children}</CartListProviderKey.Provider>

 }
 export default CartListProvider;
 export const CartListState = () => useContext(CartListProviderKey)
