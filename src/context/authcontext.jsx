import { useState ,useEffect, createContext, useContext,useReducer } from "react"
import { FaLaptopHouse } from "react-icons/fa"
import { useLocation ,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'
import {UserInfoReducer,initialState} from "../reducer/userreducer"
const AuthProviderkey = createContext()



 const AuthProvider = ({children}) =>{
   
    const [state, dispatch] = useReducer(UserInfoReducer, initialState);
   
    const location = useLocation();

   //to store token data 
    const[token,setToken] = useState("");
    const [userState,setUserState] = useState(null)
    const[isLoggedIn,setIsLoggedIn] = useState(false)
   
  
   
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
console.log(email,password)
     try{
        const passobj = {email,password}

    const sendreq =await fetch("/api/auth/signup",{
        method:"POST",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json'},
        body:JSON.stringify(passobj)
    })
    console.log("response is ",sendreq,sendreq.status)
    if(sendreq.status === 201 ||  sendreq.status === 200 ){
    const { createdUser, encodedToken } = await sendreq.json();
    console.log("received token from server fr signup",createdUser,encodedToken)
   
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        // to get the data from localstorage
        // const localStorageResponse = localStorage.getItem("loginDetails") //shows data in string format
        // const localstorgaedataparsed = JSON.parse(localStorageResponse)
        // console.log("Parsed ls val is",localstorgaedataparsed)// got data back in objectt form
        // const {user, token } = JSON.parse(localStorageResponse)
        // console.log("My token is",token)

        // storing these values of localstorage in the hook
        // setToken(token)
        // setUserInfo(user)
   
        // setUserInfo(createdUser)

        // new logic
        dispatch({type:"SET-TOKEN",payload:encodedToken})
        dispatch({type:"SET-PROFILE",payload:createdUser})

        toast("Signed Up succesfully.Please login to continue")
      
      
        navigate("/auth");

        // navigate("/products");
        // setUserState({...userState,login:true})
        }
         else if (sendreq.status === 422) {
            toast.error(
              "User email already exists! Please try signing up with another email!"
            );
          }
          
      }
    
    catch(e){
console.log("error,",e)   
        // const {
        //     response: { status },
        //   } = e;
        console.log(e)
         
        
    
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
   if(sendreq.status === 200
    ||
    sendreq.status === 201){

   
    const { foundUser, encodedToken } = await sendreq.json();
    
   
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        // to get the data from localstorage
        
        // const localStorageResponse = localStorage.getItem("loginDetails") //shows data in string format
        // const localstorgaedataparsed = JSON.parse(localStorageResponse)
        // console.log("Parsed ls val is",localstorgaedataparsed)// got data back in object form
        // const {user, token } = JSON.parse(localStorageResponse)
        // console.log(user)
        // setToken(token)
        // setUserInfo(user)
        // toggelSignInHandler()
        dispatch({type:"SET-TOKEN",payload:encodedToken})
        dispatch({type:"SET-PROFILE",payload:foundUser})
console.log("l is",location)
        navigate(location?.state?.from?.pathname || "/products")
    
        toast("Logged In succesfully")
      
       }
        else{
            toast("Your password or email address is incorrect")
            console.log(sendreq.status)
        }

}
    catch(e){
        console.log(e)
        
       
    }

}
// console.log("User's info is",user)
const logoutHandler = () =>{
    setToken(null)
    setUserInfo(null)
    localStorage.removeItem("loginDetails");
    setIsLoggedIn(false)
    // toggelSignInHandler()
    toast("Logged out successfully!")
    navigate("/")

}
const toggelSignInHandler = () =>{
    console.log(isLoggedIn,"pre setting true")
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    console.log(isLoggedIn,"post setting true")
}


const ValuesToBePassed = {
    state, dispatch,
    isLoggedIn,toggelSignInHandler, userState,setUserState,signUpHandler,loginHandler,token,userInfo,logoutHandler}
   return <AuthProviderkey.Provider value = {ValuesToBePassed} >{children}</AuthProviderkey.Provider>

 }
 export default AuthProvider;
 export const AuthContext = () =>  useContext(AuthProviderkey)
