import './navbar.css';
import { AuthContext} from "../context/authcontext"
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {WishListState } from "../context/WishlistContext"
import {CartListState } from "../context/CartContext"
import { RiAccountCircleFill } from "react-icons/ri"
import { MdOutlineExplore } from "react-icons/md"


export default function  Navigation(){
    const {isLoggedIn ,token,logoutHandler,userInfo} = AuthContext()
const { state:{cart} } = CartListState()
const {value: {wishlist} } = WishListState()

// console.log("userinfo post login is",userInfo,"and login flag is",isLoggedIn)
   return <>
    <nav>
    <div className="container">
        <div className="logo">
        {/* <Brand /> */}
        <NavLink to = "/" >  <h2><span>k</span>leren</h2> </NavLink>
      </div>
      <div className="nav-elements">
      
        <ul>
          <li>
          <NavLink to = "/products" >Explore <MdOutlineExplore/></NavLink>
          </li>
          
          <li> <NavLink to = "/wishlist" >WishList
                {token &&  (wishlist?.length)}
                </NavLink>
                </li>
               
         
                <li  >
        
              {
                token && isLoggedIn  ?  <NavLink to = "/profile" > <RiAccountCircleFill  style = {{color:"black",  fontSize :"25px"}}/>
                   
                   </NavLink>
                   :

                   <NavLink to = "/auth" > <RiAccountCircleFill  style = {{color:"black",  fontSize :"25px"}}/>
                   
                   </NavLink>
              }   
                  
                </li>
                <li ><NavLink to = "/cart"  >
       <FaShoppingCart style = {{color:"black",  fontSize :"25px"}}/>
       {token && cart?.length}
         </NavLink>
         </li>


        { isLoggedIn && token && <li>    <div onClick = {logoutHandler}> <NavLink to = "/logout" className = 'link link-active'>Log out</NavLink></div>
         </li>
        }
        </ul>
        </div>
      </div>
    </nav>
    </>
}
