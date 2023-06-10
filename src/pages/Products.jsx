// import  { useCart }  from "../context/productsContext"

import { useContext} from "react"
// import { useEffect } from "react"
import {useState,useEffect} from "react"
import Filter from "../components/Filter"
import Product  from "./Product"
import {CartState} from "../context/productsContext"
export default function ShowProducts() {
 
   
        const { state :{products,filter} ,isloading,filteredData} = CartState()
      
        console.log(isloading)
        
     
    return <>
    {
        isloading?(<h1>Laoding......</h1>):<><Filter  key = {filter}/>
    

    
    { filteredData?.map((product) =>  

     <Product key={product._id} product = {product} />
    )}
 </>
    }
    

    
    
   
    </>
}
