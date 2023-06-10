
export const initialState = {
    wishlist:[]
,
// color:{id:0,colorFlag:false}
}


const WIshListReducer  = (value,action) =>{

   

    switch(action.type){
       case  "GET-WISHLIST":
        console.log("Got called from context")
       

        return {...value,wishlist:action.payload}
        case "ADD-TO-WISHLIST":
            // console.log("Got called from context")
           const { product, wishlist } = action.payload
          
    return  {...value, wishlist}


case "REMOVE-FROM-WISHLIST":
    // console.log("Called for removing from wishlist with prod id",action.payload)
    return   {...value, wishlist: action.payload.wishlist}
    


      default:
        return value
    }
}

export default WIshListReducer;

// data presnt in initialState- sort: "",
// search: "",
// categoryInput:[],