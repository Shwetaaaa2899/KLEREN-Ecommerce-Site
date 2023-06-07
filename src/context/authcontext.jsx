import { useState ,useEffect, createContext, useContext,useReducer } from "react"
import { useLocation ,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'
 const AuthProviderkey = createContext()



 const AuthProvider = ({children}) =>{
   
    const location = useLocation();

   //to store token data 
    const[token,setToken] = useState("");
    const [userState,setUserState] = useState({login:false})
   
  
   
  //to store signed up/logined user's data on succesfful login
    const[userInfo,setUserInfo] = useState("");
    const navigate = useNavigate()
   
  
const signUpHandler = async({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) =>{
   if(password ===confirmPassword)
   {
try{
        const passobj = {email,password}

    const sendreq =await fetch("/api/auth/signup",{
        method:"POST",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json'},
        body:JSON.stringify(passobj)
    })
    const { createdUser, encodedToken } = await sendreq.json();
    // console.log("received token from server fr signup",createdUser,encodedToken)
   
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        // to get the data from localstorage
        const localStorageResponse = localStorage.getItem("loginDetails") //shows data in string format
        const localstorgaedataparsed = JSON.parse(localStorageResponse)
        console.log("Parsed ls val is",localstorgaedataparsed)// got data back in objectt form
        const {user, token } = JSON.parse(localStorageResponse)
        console.log("My token is",token)
        // storing these values of localstorage in the hook
        setToken(token)
        setUserInfo(user)
        // navigate("/products");
        setUserState({...userState,login:true})
    } catch(e){}

   
        if(userState && token){
            toast("Signed Up succesfully.Please login to continue")
          navigate("/auth");

        }
        else{
            toast("Please login first to continue")
          navigate("/auth");
        }

    }


else{
    toast("Your password is not matching ")
}

   }
  
   

//function call  to set token while login
const loginHandler = async({email ,password}) =>{
        
    console.log("from logi in form - email is ",email,"pass is",password)
    try{const passobj = {email,password}
    // console.log("username and pass is ", inp,pass)
    const sendreq =await fetch("/api/auth/login",{
        method:"POST",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json'},
        body:JSON.stringify(passobj)
    })
    const { foundUser, encodedToken } = await sendreq.json();
    
   
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        // to get the data from localstorage
        
        const localStorageResponse = localStorage.getItem("loginDetails") //shows data in string format
        const localstorgaedataparsed = JSON.parse(localStorageResponse)
        console.log("Parsed ls val is",localstorgaedataparsed)// got data back in object form
        const {user, token } = JSON.parse(localStorageResponse)
        setToken(token)
        setUserInfo(user)
        setUserState({...userState,login:true})

   
        toast("Logged In succesfully")
      
       token && navigate(location?.state?.from?.pathname || "/products")
       

}
    catch(e){
        console.log(e)
    }

}
// console.log("User's info is",user)
const logoutHandler = () =>{
    setToken("")
    localStorage.removeItem("loginDetails");
    setUserInfo({...userInfo,login:false})
    toast("Logged out successfully!")
    navigate("/")

}


const ValuesToBePassed = {userState,setUserState,signUpHandler,loginHandler,token,userInfo,logoutHandler}
   return <AuthProviderkey.Provider value = {ValuesToBePassed} >{children}</AuthProviderkey.Provider>

 }
 export default AuthProvider;
 export const AuthContext = () =>  useContext(AuthProviderkey)

