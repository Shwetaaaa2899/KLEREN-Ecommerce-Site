import { useState , createContext, useContext,useReducer } from "react"
import ProductsReducer,{initialState} from "../reducer/productsreducer"
import { useEffect } from "react"
export const ProductsProviderkey = createContext()


 const ProductsProvider = ({children}) =>{



const [state, dispatch] = useReducer(ProductsReducer, initialState);
  
// 1.get products from db
   const getData = async()=>{
    try{
         fetch("/api/products").then((resp) => resp.json().then((finalAns) => dispatch({type:"DISPLAY-PRODUCTS",payload:finalAns.products})))
		}
       
      catch(e){}  
    }
    useEffect(()=>{getData()},[])


    // 2.get product based on product id
    const getProductByID = async(id) =>{
        
    
        
            try{
                fetch(`/api/products/${id}`).then((resp) => resp.json().then((finalAns) => {
                
                    dispatch({type:"PRODUCT-IN-DETAIL",payload:finalAns.product})
                }
                )
                
                    
                    )
               }
              
             catch(e){}  
           }
    
           
   const filteredDataOnSearch = state?.search.length >0 ?
    state?.products.filter((product) => product.title.toLowerCase().includes(state?.search.toLowerCase()))
    :
    state?.products


    const filteredDataOnSort = state?.sort.length > 0? 
    filteredDataOnSearch.sort((a,b) => state?.sort ==="lowtohigh"?a.price -b.price:b.price-a.price )
:filteredDataOnSearch

const filteredDataOnInput = state?.categoryInput !== ""?filteredDataOnSort.filter((product) =>  product.categoryName === state?.categoryInput 
):filteredDataOnSort


const filteredDataOnPrice =  state?.price > 300 ?filteredDataOnInput.filter((prod) => prod.price <= state?.price)
:filteredDataOnInput

// console.log(state.allFlag)
const filteredData = state?.genre.length>0 ?
filteredDataOnPrice.filter((product) => state?.genre.includes(product.genre)):
filteredDataOnPrice

   const ValuesToBePassed = {state, dispatch,getProductByID,getData,filteredData}
   return <ProductsProviderkey.Provider value = {ValuesToBePassed}>{children}</ProductsProviderkey.Provider>
}


export default ProductsProvider;

export const CartState = () => useContext(ProductsProviderkey);