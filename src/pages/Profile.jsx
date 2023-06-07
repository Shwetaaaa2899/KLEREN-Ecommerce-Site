// import "./Profile.csss";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/authcontext";
 const Profile = () => {
  const headings = ["Profile", "Address"];
  const routes = ["", "address"];

const location = useLocation()
const {userInfo} = AuthContext()
// console.log("uesr info ",userInfo)
// :{firstName , lastName}

  return (
    <div className="profile_page">
      <ul className="profile_list">
        {headings?.map((heading, index) => (
          <li className="profile_list_item" key={index}>
            <NavLink  
              to={`/profile/${routes[index]}`}
             
            >
              <h2>{heading}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
      {/* <Outlet /> */}
      {location.pathname ==="/profile/" &&
    <div><h3>Full Name:<span>{userInfo.firstName}   {userInfo.lastName}</span></h3>
    <h3>Email:<span>  {userInfo.email}</span></h3></div>}
    </div>

  );
};
export default Profile