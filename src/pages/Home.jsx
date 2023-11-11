import Filter from "../components/Filter"
import { useState } from "react"
import "./css/Home.css"
import {CartState} from "../context/productsContext"

import { useParams ,Link ,NavLink} from "react-router-dom"
import Image from "./HomePage.jpg"
import { Footer } from "../components/Footer/Footer"
import {HomeCategory} from "../components/HomeCategory/HomeCategory"
export default function Home() {
        const { dispatch } = CartState()
const categoryWiseNavigate = (category) => {
     
        dispatch({type:"CATEGORY",payload:category})

}
    return <div className="home-container" >
 <div className="hero-section-wrapper">
        <img src = {Image} alt = "hero-image"/>
     
        <NavLink to = "/products">
        <button className="hero-btn" onClick = {()=>dispatch({type:"CLEAR-FILTER"})}>
        Let's Explore
        </button>
        </NavLink>
      
      
       
 </div>

<div className="cat-heading"><h2>Explore Our Categories</h2> </div>

<HomeCategory />
  
        <Footer />
        </div>
   

}