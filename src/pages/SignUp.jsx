import { AuthContext} from "../context/authcontext"
import { useState} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import "./css/Form.css"
import { NavLink } from "react-router-dom";
export default function Auth() {
    const { signUpHandler} = AuthContext()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordType, setConfirmPasswordType] = useState(false);

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
            console.log(userSignUpDetails)
      }
     
      const submitHandler = (e) =>{
        e.preventDefault()
        const{email,password,confirmPassword,firstName,lastName} =  userSignUpDetails
   
        if(email.length<= 0 ||password.length<=0 ||confirmPassword.length<=0||firstName.length<=0 ||lastName.length<=0){
          toast("Please fill the details")
        }
        else{
        
          signUpHandler(userSignUpDetails);
        }
      
   
      }


return <div>

<div className="login-container">
<div className="left">
        <div className="form-box">
          <div className="header-login">
            <h3>Welcome to the KLEN ECommerece</h3>
          </div>

          <form className="form-login" onSubmit={submitHandler}>
            <div className="left-side">
             
                <p>
                  <h3>FirstName:</h3>

                  <input 
                    required 
                    placeholder=" First Name" 
                     type  = "text"
                      name = "firstName" 
                        onChange = {setInputHandler}/>

                </p>
        
                <p>
                  <h3>LastName:</h3>

                  <input  required placeholder="Last Name"  type  = "text"
                   name = "lastName" 
                    onChange = { setInputHandler} /> 
                </p>

                <p>
                  <h3>Email:</h3>

                  <input  
                  required 
                  placeholder="E-mail"
                   type = "text" 
                   name = "email" onChange = {setInputHandler}  />
                </p>

                
                <p>
                <h3>Confirm Password:</h3>
                    <div className="password-input">
                     <input required 
                  placeholder="Confirm Password"
                  type={confirmPasswordType ? "text" : "password"}
               name = "confirmPassword" 
               onChange = {setInputHandler}/> 

<span
                        onClick={() =>
                          setConfirmPasswordType(!confirmPasswordType)
                        }
                      >
                        {confirmPasswordType ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                      </div>
                      </p>
                <p>
                  <h3>Password:</h3>
                  <div className="password-input">
              
              
     
                  <input
                    required
                   
                    onChange={setInputHandler}
                    className="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                  
                    placeholder="Password"
                  />
                    <span
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                      </div>
                </p>
           

              <div className="btn-login-container">
                <button type="submit" className="submitBtn">
                  Submit
                </button>
           
              </div>
                 <div clasName="login-confirmation">
                <NavLink to="/auth" className="submitBtn">
                  Already have an account? &nbsp;
                  <span>Login</span>
                  &nbsp; here
                </NavLink>
              </div>
            </div>
         
          </form>
         
        </div>
      </div>
      <div className="right">
        <img src="https://files.realpython.com/media/Discover-Flask-Part-2-Creating-a-Login-Page_Watermarked.bb23a84a8760.jpg" />
      </div>


</div>
</div>
}

  {/* <h5 className="form-step">Sign Up</h5>
  <form onSubmit={preventData}>
    <div className="field1">
      {/* <label> customer info </label> */}
      // <input  required placeholder=" First Name"  type  = "text" name = "firstName"   onChange = {setInputHandler}/>
      {/* <input  required placeholder="Last Name"  type  = "text" name = "lastName"  onChange = { setInputHandler} /> */}
      // <input  required placeholder="E-mail" type = "text" name = "email" onChange = {setInputHandler}  />
      // <input required placeholder="Password" type = "password" name = "password" onChange = {setInputHandler}/>
      // <input  required placeholder="Confirm Password" type = "password" name = "confirmPassword" onChange = {setInputHandler}  />
    {/* </div> */}

    {/* <button type="submit" id="submitBtn" className="submitBtn" onClick = {submitHandler}>submit</button> */}
  {/* </form> */} 

  {/* <button className="prevBtn" type="submit">PREV</button>
  <button className="nextBtn" type="submit">NEXT</button> */}
{/* // </div> */}
{/* <label><b>First Name:</b><input type  = "text" name = "firstName"   onChange = {setInputHandler}/></label>
<br/>

<label><b>Last Name:</b><input type  = "text" name = "lastName"  onChange = { setInputHandler}/></label>
<br/>
<label><b>Password:</b><input type = "password" name = "password" onChange = {setPasswordHandler} /></label>
<br />

<label><b>Confirm Password:</b><input type = "password" name = "confirmPassword" onChange = {setPasswordHandler} /></label>
<br/>
<button onClick = {submitHandler} >Submit</button> */}

