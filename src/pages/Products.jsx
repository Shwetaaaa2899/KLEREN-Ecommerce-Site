// import  { useCart }  from "../context/productsContext"

import { useContext} from "react"
// import { useEffect } from "react"
import {useState,useEffect} from "react"
import Filter from "../components/Filter"
import Product  from "./Product"
import {CartState} from "../context/productsContext"
export default function ShowProducts() {
 
   
        const { state :{products,filter} ,filteredData} = CartState()
        // useEffect(()=>{
        //     <Filter />
        // },[filter])
        console.log(filter)
     
// console.log("received from reducer",products)
    
    return <>
    <Filter  key = {filter}/>
    

    {
        filteredData?.map((product) =>  

        <Product key={product._id} product = {product} />
       )
    }
   
    </>
}
