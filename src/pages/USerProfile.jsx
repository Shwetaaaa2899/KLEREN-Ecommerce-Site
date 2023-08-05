import { Outlet } from "react-router-dom"
import "./css/Profile.css"
import { AuthContext } from "../context/authcontext"
import { useEffect, useState } from "react"
import {AddressModal} from "../components/AdressModal"
// import {AiOutlineEdit} from "react-icons/ai "
const  routes = [
    {id:1,name:"Profile"},
    {id:2,name:"Address"}
]

export const USerProfile = ({children}) =>{
    const [modal,setModal] = useState(false)
const openModal = () =>setModal(true)
const closeModal = () =>setModal(false)
    const[selectedTab,setSelectedTab] = useState(1)
const {state:{profile,address},dispatch} = AuthContext()
let addressToBeShown = address
console.log(addressToBeShown)
return   <div className="user-profile-container">
<div className="tab-section">
   <div
onClick = {()=>setSelectedTab(1)}
 className={selectedTab===1?"active-div":"inactive-div"}>
    Profile
    </div>
    <div 
    onClick = {()=>setSelectedTab(2)}
    className={selectedTab===2?"active-div":"inactive-div"}>
    Address
    </div>
</div>

   <div className="content-section">
 {selectedTab === 2?



<div>
<h1>Address Details</h1>
{
    
    addressToBeShown.length>0  && addressToBeShown.map((details) => 
      <div className="address-container-card">
      <p>  
{/* <input type = "radio" name = "address"  onChange = {()=>setAddressSelected(true)}/> */}
 <strong>{details.Name}</strong> 
</p>
<p>
  {details.line1} ,{details.area},{details.city},
  {details.pincode} , {details.state}
</p>
<p><strong>Phone:</strong> {details.phone}</p>
      </div>
       )
      



    }
    <button onClick = {setModal}>Add Address</button>

    {
      modal &&  <AddressModal  closeModal= {closeModal} 
     />
    }
 
    </div>





    :
    <div>
    <h4>Profile Details</h4>
<img src =     "https://i.pinimg.com/originals/22/04/a8/2204a80672494b512d779aa3fe119744.jpg" />
   <p>
  
  <strong>  Name: </strong>{profile?.firstName} {profile?.lastName}
   </p>
   <p>

<strong> Email:</strong>{ profile?.email}
</p>
<button className="logout-btn"
 onClick = {()=>dispatch({type:"LOGOUT"})}>Log Out</button>
    </div>
 }
  
   </div>

</div>
}
