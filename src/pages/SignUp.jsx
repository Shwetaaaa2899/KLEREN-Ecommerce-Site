import { AuthContext} from "../context/authcontext"
import { useState} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Auth() {
    const { signUpHandler} = AuthContext()
   
    const navigate = useNavigate();
   
    const [userSignUpDetails, setUserSignUpDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
      });
      const setInputHandler = (e) => {
     
        setUserSignUpDetails({...userSignUpDetails,
            [e.target.name]:e.target.value
        }
            )
      }
     
      const submitHandler = () =>{
        signUpHandler(userSignUpDetails);
   
      }
      const preventData = (e) =>{
        e.preventDefault()
      }

return <>

<div className="form-box">
  <h5 className="form-step">Sign Up</h5>
  <form onSubmit={preventData}>
    <div className="field1">
      {/* <label> customer info </label> */}
      <input  required placeholder=" First Name"  type  = "text" name = "firstName"   onChange = {setInputHandler}/>
      <input  required placeholder="Last Name"  type  = "text" name = "lastName"  onChange = { setInputHandler} />
      <input  required placeholder="E-mail" type = "text" name = "email" onChange = {setInputHandler}  />
      <input required placeholder="Password" type = "password" name = "password" onChange = {setInputHandler}/>
      <input  required placeholder="Confirm Password" type = "password" name = "confirmPassword" onChange = {setInputHandler}  />
    </div>

    <button type="submit" id="submitBtn" className="submitBtn" onClick = {submitHandler}>submit</button>
  </form>

  {/* <button className="prevBtn" type="submit">PREV</button>
  <button className="nextBtn" type="submit">NEXT</button> */}
</div>
{/* <label><b>First Name:</b><input type  = "text" name = "firstName"   onChange = {setInputHandler}/></label>
<br/>

<label><b>Last Name:</b><input type  = "text" name = "lastName"  onChange = { setInputHandler}/></label>
<br/>
<label><b>Password:</b><input type = "password" name = "password" onChange = {setPasswordHandler} /></label>
<br />

<label><b>Confirm Password:</b><input type = "password" name = "confirmPassword" onChange = {setPasswordHandler} /></label>
<br/>
<button onClick = {submitHandler} >Submit</button> */}
</>
}

