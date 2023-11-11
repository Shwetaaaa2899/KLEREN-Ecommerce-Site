import React from 'react'
import {CartState} from "../../context/productsContext"
import "./HomeCategory.css"
import { useParams ,Link ,NavLink} from "react-router-dom"
export const HomeCategory =() => {
    
    const { dispatch } = CartState()
    const categoryWiseNavigate = (category) => {
         
            dispatch({type:"CATEGORY",payload:category})
    
    }
  return (
    <div className="category-container">
      

 <div className="category-card" onClick = {()=>categoryWiseNavigate("kids")}>

     
<div className="hero">
<Link to = {`/products/kids`}>
 <h3>KID's Wear </h3>
 <p>Upto 30-70% OFF</p>
 <p>Shop Now</p>
</Link>
</div>   



                       
</div>                       
<div className="category-card" onClick = {()=>categoryWiseNavigate("men")}>
      
      
      <div className="hero">
      <Link to = {`/products/men`}>
<h3>MEN's Wear </h3>
<p>Upto 30-50% OFF</p>
<p>Shop Now</p>
</Link>
</div>     
</div>
     
   
           <div className="category-card" onClick = {()=>categoryWiseNavigate("women")}>
      
      
        <div className="hero">
       
        <Link to = {`/products/women`}>
 <h3>WOMEN's Wear </h3>
 <p>Upto 50-90% OFF</p>
 <p>Shop Now</p>
 </Link>
       

       
</div>
        </div>
     
    </div>
  )
}
