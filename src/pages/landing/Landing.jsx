
import "./Landing.css"
import {CartState} from "../../context/productsContext"

import { NavLink} from "react-router-dom"
import Image from "./HomePage.jpg"
import { Footer } from "../../components/footer/Footer"
import {HomeCategory} from "../../components/homeCategory/HomeCategory"
export default function Landing() {        
        const { dispatch } = CartState()

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