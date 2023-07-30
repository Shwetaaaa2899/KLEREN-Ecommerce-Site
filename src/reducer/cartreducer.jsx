
export const initialState = {
    cart:[],
    totalprice:0
}


const cartReducer  = (value,action) =>{

   

    switch(action.type){
       case  "GET-CART":
       
       

        return {...value,cart:action.payload}
        case "ADD-TO-CART":
         
           const { product, cart } = action.payload
           
    return  {...value, cart}


case "REMOVE-FROM-CART":
  
    
    return {...value,cart:action.payload}
  case "INCREASE-QUANTITY":
    
return {...value,cart:action.payload}
case "DECREASE-QUANTITY":
    return {...value,cart:action.payload}


    case "GET-TOTAL-PRICE":
        return {...value,totalprice:action.payload}
        case "EMPTY-CART":
            return {...value,cart:[]}
      default:
        return value
    }
}

export default cartReducer;

// data presnt in initialState- sort: "",
// search: "",
// categoryInput:[],