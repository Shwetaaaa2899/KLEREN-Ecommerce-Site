import { useAddressContext } from "../context/addresscontext"
import { AuthContext } from "../context/authcontext";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AddressContext } from "../context/addresscontext"
// import { useAddressContext } from "../context/addresscontext"
const Address = () =>{
    const headings = ["Profile", "Address"];
    const routes = ["", "address"];
    const location = useLocation()
    const {userInfo} = AuthContext()
    const dummy = {
        Name:"Adarsh Balika",
        area:"Bandra West",
        city:"Mumbai",
    state:"Maharashtra",
    pincode:"400010",
    phone:"0999099900"
    
    }

    const fullname = `{userInfo.firstName} {userInfo.lastName}`
   
    const [address,setAddress]  = useState({Name:"", area:"", city:"",state:"",pincode:"",phone:""})
    const [showaddress,setShowAddress]  = useState({Name:"", area:"", city:"",state:"",pincode:"",phone:""})
    const { Name, area, city, state, pincode,phone } = showaddress
    const [readonly,setReadOnly] = useState(false)
    console.log("addres is",address)
    const updateInfo = (e) =>{setAddress({...address,[e.target.name] : e.target.value})}
    const SaveInfo = () =>{
        console.log("SAVE-INFO")
      
        if(readonly){
            setShowAddress(address)
        setReadOnly( true)
         }
         else{

       
        setShowAddress(dummy)
        setReadOnly( false)
         }

      
    }
    const Showdummy =() => {
        setReadOnly( false)
        console.log("DUmmy data ",dummy,address)
        setShowAddress(dummy)
    }
    const SaveInfoOnEdit = ()=>{

        // setReadOnly(false)
        // 
        console.log("edit",readonly)
        setShowAddress(address)
    }
 
return <>

    


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
      {location.pathname ==="/profile/address" &&
    <div> <label><b>Name:</b></label><input  type = "text"  autocomplete = "off" value = {Name} name = "Name" placeholder= "User's Name" onChange = {(e)=> updateInfo(e)} readOnly={readonly.edit}/>
  <br />  <label><b>Area:</b></label><input type = "text" value = {area} name = "area" placeholder= "User's Area" onChange = {(e)=> updateInfo(e)}  readOnly={readonly.edit}/>
  <br />  <label><b>City:</b></label>       <input type = "text" value = {city}  name = "city" placeholder= "User's City" onChange = {(e)=> updateInfo(e)}  readOnly={readonly.edit}/>
  <br />  <label><b>State:</b></label>    <input type = "text" value = {state} name = "state" placeholder= "User's State" onChange = {(e)=> updateInfo(e)}  readOnly={readonly.edit}/>
  <br />  <label><b>Pincode:</b></label>    <input type = "text" value = {pincode} name = "pincode" placeholder= "User's PinCode" onChange = {(e)=> updateInfo(e)}  readOnly={readonly.edit}/>
        
      <br />  <button onClick = {SaveInfo} >Save</button>
       <button onClick = {SaveInfoOnEdit} >Edit Info</button>
        <button onClick = {Showdummy}>Fill with Dummy Values</button>
    </div>
      }
      </div>

  
</>
}
export default Address