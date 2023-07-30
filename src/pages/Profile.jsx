// import "./Profile.csss";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/authcontext";
import {CartListState } from "../context/CartContext"
import {ProfileModal} from "./ProfileModal"
import "./css/Profile.css"
 const Profile = () => {
  const headings = ["Profile", "Address"];
  const routes = ["", "address"];


const location = useLocation()
const {userInfo} = AuthContext()
// console.log("uesr info ",userInfo)
// :{firstName , lastName}
const {state:{cart}} = CartListState()
const [modal,setModal] = useState(false)
const openModal = () => setModal(false)
const closeModal = () => setModal(false)
  return (
  <>pppppppp</>
//     <div className="profile_page">
//       <ul className="profile_list">
//         {headings?.map((heading, index) => (
//           <li className="profile_list_item" key={index}>
//             <NavLink  
//               to={`/profile/${routes[index]}`}
             
//             >
//               <h2>{heading}</h2>
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       {/* <Outlet /> */}
//       {location.pathname ==="/profile/" &&
    
//     <div  className="profile">
//     <div className="header">
//       {userInfo.lastName}'s Profile'
//     </div>

//    <div className="user-profile">

//     <div className="image">
//       <img src = "https://th.bing.com/th/id/OIP.QNrlCux1bbEkhil_vIoHzwAAAA?pid=ImgDet&w=361&h=355&rs=1" />
//     </div>
//     <div className="details">
//         <p>Name:<strong>
//         {userInfo.firstName}   {userInfo.lastName}</strong></p>
//     <p>Email:<strong>  {userInfo.email}</strong></p>
//     <p>Total Items In Cart:<strong>  {cart?.length}</strong></p>
//     <p>Total Items In WishList:<strong>  {cart?.length}</strong></p>
//     </div>


//     </div>

//     <div>
   
//     <button onClick={openModal}>Edit Profile</button>
//     </div>

//     {
//       modal && <ProfileModal  closeModal = {closeModal}/>
//     }
  
//     </div>
    
//     } 
//  </div>

  );
};
export default Profile;