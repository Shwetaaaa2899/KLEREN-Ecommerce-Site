const ProductsReducer  = (state,action) =>{
   

switch(action.type){
   case  "DISPLAY-PRODUCTS":

    const max = action?.payload.reduce((acc,prod) => prod.price>acc?acc = prod.price:acc,0)
 const min = action?.payload.reduce((acc,prod) => prod.price<acc?acc = prod.price:acc,0)
//  console.log("max and min is",max,min)

 
    return {...state,products:action.payload,maximumPrice: max,minimumPrice:min}
    case "PRODUCT-IN-DETAIL":
       
        return { ...state,ProductToBeDetailed:action.payload}
        case "SEARCH":
          return {...state,search:action.payload}
          case "SORT":
            return {...state,sort:action.payload}

            case "CATEGORY":
              
           return  {...state, categoryInput:action.payload,allFlag : !state.allFlag}
           case "GENRE":
              // console.log(action.payload)
            
           return  state.genre.includes(action.payload)?{...state,genre:state.genre.filter((type) => type !== action.payload)}
          :
            {...state, genre:[...state.genre,action.payload]}

            case "RANGE":
              
             const { name,value} = action.payload
             console.log("reducer range",name,value)
             console.log(state)

              return {...state,[name]:Number(value)}
              case "DISPLAY-ALL-PRODUCTS":
                console.log("2st step")
                console.log(state.allFlag,"before check")
                return    {
                  
                  ...state,
                     sort: "",
                     search: "",
                     categoryInput:"",
         
                     genre:[],
                      maximum:0,
                      minimum:300,
                      price:300
                     }
                // return {...state,allFlag : !state.allFlag}
             case "CLEAR-FILTER":
             
             return    {
                  
                 ...state,
                    filter:state.filter + 1
                    }
     default:
                return state

}
// console.log("data received from conextx",data)


}

export const initialState = {islaoding:true,
    products :[],
    backup:[],
 
   ProductToBeDetailed:{},
 
    genre:[],
    maximumPrice:0,
    minimumPrice:300,
    price:300,
    sort: "",
    search: "",
    categoryInput:"",
    filter:0
   
    }
export default ProductsReducer;