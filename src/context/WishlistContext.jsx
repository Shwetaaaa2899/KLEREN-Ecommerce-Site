import { useState , createContext, useContext,useReducer } from "react"
import WIshListReducer,{initialState} from "../reducer/wishlistreducer"
import { useEffect } from "react"
import { AuthContext} from "./authcontext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const WishListProviderKey = createContext()



 const WishListProvider = ({children}) =>{
    
const navigate = useNavigate()
    const [value,dispatch] = useReducer(WIshListReducer,initialState)
const { token} = AuthContext()
// console.log("Currently token has",token)
//  api call


const WishListCall = async() =>{

   
  
    try{
        const passobj = {authorization: token}

    const sendreq =await fetch("/api/user/wishlist",{
        method:"GET",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token
}
    })

    const response = await sendreq.json();
    // console.log("received token from server fr wishlist",response)
    dispatch({type:"GET-WISHLIST",payload:response.wishlist})
//  setWishList(data.wishlist)

//  return  data.wishlist
}
    catch(e){
        console.error(e);
     
    }
   }


   useEffect(() =>{
   token &&  WishListCall() },[token])


   //api call to add product to wishlist

const handlewishlistCheck = (product) =>  {
 
    return value?.wishlist?.some(item => product._id === item._id);


//     // navigate("/auth")

}
   const addProductToWishList = async(product) =>{
 
    try{
        // console.log("recived item for wshl is",product,token)
                const passobj = {product}
                // console.log("PASSOBJ IS ",JSON.stringify(passobj))
                const sendreq =await fetch("/api/user/wishlist",{
                    method:"POST",
                    headers:{'Accept':'application/json',
                'Content-Type':'application/json',
                authorization : token},
                body:JSON.stringify(passobj)
                })
                const response = await sendreq.json();
              
              dispatch({type:"ADD-TO-WISHLIST",payload:{product,wishlist:response.wishlist}})
             
            }
            catch(e){
console.log(e)
                toast.error("Unable to add to wishlist!");
            }


//     console.log("remove case in context called")
//     removeProductToWishList(product)
//    

}
 

const removeProductToWishList = async(product) =>{
  
      try{
        //   console.log("recived item for wshl is",product._id,token)
                  const passobj = {product}
                  console.log(passobj)
                  const sendreq =await fetch(`/api/user/wishlist/${product._id}`,{
                      method:"DELETE",
                      headers:{'Accept':'application/json',
                  'Content-Type':'application/json',
                  authorization : token}
            
                  })
             
                //   console.log("received data  after removing data from wishlost",sendreq)

                  const response = await sendreq.json();
                //   console.log("received data  after removing data from wishlost",response)

                // setWishList(wishlist)
                dispatch({type: "REMOVE-FROM-WISHLIST",payload:{product,wishlist:response.wishlist}})
               
              }
              catch(e){
                console.log(e)
              }          

            }

//condition to add the product
  
const  wishlistdispatch  = dispatch
    const valueToBePassed = {value,wishlistdispatch,addProductToWishList,WishListCall,handlewishlistCheck,removeProductToWishList}

    return <WishListProviderKey.Provider value={valueToBePassed}>{children}
    </WishListProviderKey.Provider>
 }

 
 export default WishListProvider;
 export const WishListState = () => useContext(WishListProviderKey)
