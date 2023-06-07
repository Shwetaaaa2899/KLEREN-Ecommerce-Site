import { AuthContext } from "../context/authcontext"
import { useNavigate ,NavLink,useLocation} from "react-router-dom"
import { toast } from "react-toastify"
import { useState} from "react"
import "./css/Form.css"
export default function Auth() {
   const location = useLocation()
   const navigate = useNavigate()

    const { loginHandler,token } = AuthContext()
    const [email,setInp] = useState("")
  const  userData = {email : "adarshbalika@gmail.com",
password:"adarshbalika"} 
    // console.log("location in auth page is",location)
    const[password,setPass] = useState("")
    
    const loginClickHandler = () =>{
      email && password&&  loginHandler({email,password})
        // navigate("/products")

}
const loginAsGuestHandler = () =>{
setInp("adarshbalika@gmail.com")
setPass("adarshbalika")

// toast("Logged in as Guest")
loginHandler(userData)
// navigate("/profile")

}
    
    return <>

<div className="form-box">
  <h5 className="form-step">Login</h5>
  <form>
  <div className="field1">   <input  required value = {email} type  = "text" name = "name"  onChange = {(e) => setInp( e.target.value)} placeholder="Name"/>
    
      <input required  value = {password} type = "password" onChange = {(e) => setPass(  e.target.value)}  placeholder="Password" />
    
    </div>
    <button onClick = {loginClickHandler } type="submit" id="submitBtn" className="submitBtn">submit</button>
  
    </form>
    <button onClick = {loginAsGuestHandler}   className="submitBtn" type="submit">Login As Guest?</button>
    { !token  &&   <button className="submitBtn" type="submit">   <NavLink to = "/signup"style = {{textDecoration:"none" , color:"white" ,border:"none"}} className="submitBtn">Create a New Account?Sign Up</NavLink> </button>}
  </div>

 
    </>
}
