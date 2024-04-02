// import  { useCart }  from "../context/productsContext"

import { useContext} from "react"
import { useParams ,Link } from "react-router-dom"
// import { useEffect } from "react"
import {useState,useEffect} from "react"
import Filter from "../../components/filter/Filter"
import Product  from "../../components/productCard/Product"
import "./MainContainer.css"
import { toast } from "react-toastify"
import {CartState} from "../../context/productsContext"
import { ClipLoader } from "react-spinners";  
export default function ShowProducts() {
 
    const {categoryname} = useParams() 
   
    const { state :{filter,loading} ,isloading,filteredData} = CartState()
      
        // console.log(isloading)
      let  productsArray = categoryname?.length>0 
     ?
     (
        categoryname !=="general"?
        filteredData?.filter((product) => product.categoryName === categoryname)
        :
       
        filteredData
     ):

     filteredData
  
 
     
    return <div className="container-wrapper">
    {loading && <ClipLoader />}
    <div className="left-container" >
    <Filter key = {filter} className = "filter"  />
    
    </div>
    <div className="right-container" >
    <div className = "cards-parent-container" >
{ productsArray?.map((product) =>  

<Product key={product._id} product = {product} />
)}
</div>
</div>


    
    
 
    </div>
}
