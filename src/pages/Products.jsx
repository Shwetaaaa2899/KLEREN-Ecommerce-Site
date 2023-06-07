// import  { useCart }  from "../context/productsContext"

import { useContext} from "react"
import {useState,useEffect} from "react"
import Filter from "../components/Filter"
import Product  from "./Product"
import {CartState} from "../context/productsContext"
export default function ShowProducts() {
 
   
        const { state :{products} ,filteredData} = CartState()
     
console.log("received from reducer",products)
    
    return <>
    <Filter />
    

    {
        filteredData?.map((product) =>  

        <Product key={product._id} product = {product} />
       )
    }
   
    </>
}
