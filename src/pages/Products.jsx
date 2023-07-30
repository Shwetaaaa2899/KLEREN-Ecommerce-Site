// import  { useCart }  from "../context/productsContext"

import { useContext} from "react"
// import { useEffect } from "react"
import {useState,useEffect} from "react"
import Filter from "../components/Filter"
import Product  from "./Product"
import "./css/MainContainer.css"
import {CartState} from "../context/productsContext"
export default function ShowProducts() {
 
   
        const { state :{products,filter} ,isloading,filteredData} = CartState()
      
        // console.log(isloading)
        
     
    return <div className="container-wrapper">
    <div className="left-container" >
    <Filter key = {filter} className = "filter"  />
    
    </div>
    <div className="right-container" >
    <div className = "cards-parent-container" >
{ filteredData?.map((product) =>  

<Product key={product._id} product = {product} />
)}
</div>
</div>
    {/* {
        isloading?(<h1>Laoding......</h1>):
        <div className = "mainFrame">
        <Filter key = {filter} className = "filter"  />
    
<div className = "cards-parent-container" >
{ filteredData?.map((product) =>  

<Product key={product._id} product = {product} />
)}
</div>
    
   
 </div>
    }
    

    
    
    */}
    </div>
}
