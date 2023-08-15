import Filter from "../components/Filter"
import { useState } from "react"
import "./css/Home.css"
import {CartState} from "../context/productsContext"
import { useParams ,Link ,NavLink} from "react-router-dom"
export default function Home() {
        const { dispatch } = CartState()
const categoryWiseNavigate = (category) => {
     
        dispatch({type:"CATEGORY",payload:category})

}
    return <div className="home-container" >
 <div className="hero-section-wrapper">
        <img src = "https://www.omnisend.com/blog/wp-content/uploads/2021/03/21-03-19-Fashion-ecommerce.jpg" alt = "hero-image"/>
       
        <NavLink to = "/products">
        <button className="hero-btn" onClick = {()=>dispatch({type:"CLEAR-FILTER"})}>
        Let's Explore
        </button>
        </NavLink>
      
      
       
 </div>
<h1>Explore Our Categories</h1>
    <div className="category-container">

        <div className="category-card" onClick = {()=>categoryWiseNavigate("kids")}>

     
<div className="hero">
<Link to = {`/products/kids`}>
 <h3>KID's Wear </h3>
 <p>Upto 30-70% OFF</p>
 <p>Shop Now</p>
</Link>
</div>     
<div>

                       
     
      
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
<div>
        
        
       
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
        
        </div>
   

}