import { AuthContext } from "../../context/authcontext"
import { useNavigate ,NavLink,useLocation} from "react-router-dom"
import { useState} from "react"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import "./Form.css"
export default function Login() {


  const location = useLocation();
  const navigate = useNavigate();

  const { loginHandler, state:{token}, userInfo } = AuthContext();
  const [authInfo, setAuthInfo] = useState({ email: "", password: "" });
  const setUserInfoHandler = (e) => {
    setAuthInfo({ ...authInfo, [e.target.name]: e.target.value });
  };
  const GuestModeData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const loginClickHandler = (e) => {
    e.preventDefault();
    loginHandler(authInfo);
  };

  const loginAsGuestHandler = () => {
    setAuthInfo(GuestModeData);

  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  
return (
  <div>

    <div className="login-container">
      <div className="left">
        <div className="form-box">
          <div className="header-login">
            <h3>Welcome to the KLEN ECommerece</h3>
          </div>

          <form className="form-login" onSubmit={loginClickHandler}>
            <div className="left-side">
             
             
           
             
              <label>
                <p>
                  <h3>Email:</h3>

                  <input
                    required
                    value={authInfo?.email}
                    type="text"
                    name="email"
                    onChange={setUserInfoHandler}
                    placeholder="Your Email"
                  />
                </p>
              </label>

              <label>
                <p>
                  <h3>Password:</h3>
                  <div className="password-input">
                  <input
                    required
                    value={authInfo?.password}
                    onChange={setUserInfoHandler}
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
              </label>

              <div className="btn-login-container">
                <button type="submit" className="submitBtn">
                  Submit
                </button>
                <button onClick={loginAsGuestHandler} className="submitBtn">
                  Login As Guest?
                </button>
              </div>
            </div>
           
          </form>
          <div clasName="login-confirmation">
           
           <NavLink to="/signup" className="submitBtn">
             Create a New Account?
             <span>Sign Up</span>
           </NavLink>
       
       </div>
        </div>
      </div>
      <div className="right">
        <img src="https://files.realpython.com/media/Discover-Flask-Part-2-Creating-a-Login-Page_Watermarked.bb23a84a8760.jpg" />
      </div>
    </div>
  </div>
);

}

{/* 
<div className="form-box">
  <h5 className="form-step">Login</h5>
  <form onSubmit = {preventData}>
  <div className="field1">   <input  required  type  = "text" name = "email"  onChange = {loginDetailSetter} placeholder="Email Address"/>
    
      <input required   type = "password" name = "password"  onChange = {loginDetailSetter}  placeholder="Password" />
    
    </div>
    <button onClick = {loginClickHandler } type="submit" id="submitBtn" className="submitBtn">submit</button>
  
    </form>
    <button onClick = {loginAsGuestHandler}   className="submitBtn" type="submit">Login As Guest?</button>
 <button className="submitBtn" type="submit">   <NavLink to = "/signup"style = {{textDecoration:"none" , color:"white" ,border:"none"}} className="submitBtn">Create a New Account?Sign Up</NavLink> </button>
  </div> */}


 
    // </>
