import { AuthContext } from "../context/authcontext"
import { useNavigate ,NavLink,useLocation} from "react-router-dom"
import { toast } from "react-toastify"
import { useState} from "react"
import "./css/Form.css"
export default function Auth() {
   const location = useLocation()
   const navigate = useNavigate()
const [userLoginInfo,setUserLoginInfo] = useState({email:"",password:""})
    const { isLoggedIn,loginHandler,toggelSignInHandler,token } = AuthContext()
    console.log(isLoggedIn,"pre setting true")
  const  userGuestData = {email : "adarshbalika@gmail.com",password:"adarshbalika"} 
   
    const loginDetailSetter= (e) =>{
      
      setUserLoginInfo({...userLoginInfo,[e.target.name] :e.target.value})
      //  loginHandler({email,password})
        // navigate("/products")

}
const loginClickHandler = () =>{
  console.log(userLoginInfo.email,"and pass is",userLoginInfo.password)
  
}
const loginAsGuestHandler = () =>{


loginHandler(userGuestData)

// toast("Logged in as Guest") --messing up with logged in pop up

// navigate("/profile")

}
const preventData = (e) =>{
  e.preventDefault()
  loginHandler(userLoginInfo)
}
    
    return <>

<div className="form-box">
  <h5 className="form-step">Login</h5>
  <form onSubmit = {preventData}>
  <div className="field1">   <input  required  type  = "text" name = "email"  onChange = {loginDetailSetter} placeholder="Name"/>
    
      <input required   type = "password" name = "password"  onChange = {loginDetailSetter}  placeholder="Password" />
    
    </div>
    <button onClick = {loginClickHandler } type="submit" id="submitBtn" className="submitBtn">submit</button>
  
    </form>
    <button onClick = {loginAsGuestHandler}   className="submitBtn" type="submit">Login As Guest?</button>
 <button className="submitBtn" type="submit">   <NavLink to = "/signup"style = {{textDecoration:"none" , color:"white" ,border:"none"}} className="submitBtn">Create a New Account?Sign Up</NavLink> </button>
  </div>

 
    </>
}
