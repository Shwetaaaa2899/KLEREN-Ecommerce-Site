import './navbar.css';
import { AuthContext} from "../context/authcontext"
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {WishListState } from "../context/WishlistContext"
import {CartListState } from "../context/CartContext"
import { RiAccountCircleFill } from "react-icons/ri"
import { MdOutlineExplore } from "react-icons/md"

import {CartState} from "../context/productsContext"
export default function  Navigation(){
    const {dispatch, state:{token,isLoggedIn},logoutHandler,userInfo} = AuthContext()
const { state:{cart} ,} = CartListState()
const {filterDispatch
} = CartState()
const {value: {wishlist} } = WishListState()
const searchEventHandler = (e) => {
  filterDispatch({type:"SEARCH",payload:e.target.value})
}

   return <>
    <nav>
    <div className="container">
        <div className="logo">
        {/* <Brand /> */}
        <NavLink to = "/" >  <h2><span>k</span>leren</h2> </NavLink>
      </div>
      <div>
<span><input type = "text" placeholder = "search your fav products" onChange = {searchEventHandler} /></span>
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
        
              {/* {
                token && isLoggedIn  ?  <NavLink to = "/profile" > <RiAccountCircleFill  style = {{color:"black",  fontSize :"25px"}}/>
                   
                   </NavLink>
                   :

                   <NavLink to = "/auth" > <RiAccountCircleFill  style = {{color:"black",  fontSize :"25px"}}/>
                   
                   </NavLink>
              }    */}
              <NavLink to = "/profile" > <RiAccountCircleFill  style = {{color:"black",  fontSize :"25px"}}/>

         </NavLink>     
                </li>
                <li ><NavLink to = "/cart"  >
       <FaShoppingCart style = {{color:"black",  fontSize :"25px"}}/>
       {token && cart?.length}
         </NavLink>
         </li>


        {  token && <li>    <div onClick = {()=>dispatch({type:"LOGOUT"})}>
         {/* <NavLink to = "/" className = 'link link-active'> */}
        
        Log out
        {/* </NavLink> */}
        </div>
         </li>
        }
        </ul>
        </div>
      </div>
    </nav>
    </>
}
