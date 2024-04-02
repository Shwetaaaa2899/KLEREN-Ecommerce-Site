import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserInfoReducer, initialState } from "../reducer/userreducer";
const AuthProviderkey = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserInfoReducer, initialState);

  const location = useLocation();

  //to store token data
  const [token, setToken] = useState("");
  const [userState, setUserState] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //to store signed up/logined user's data on succesfful login
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

  const signUpHandler = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    if (password === confirmPassword) {
      try {
        const passobj = { email, password };

        const sendreq = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passobj),
        });
        if (sendreq.status === 201 || sendreq.status === 200) {
          const { createdUser, encodedToken } = await sendreq.json();
     
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ user: createdUser, token: encodedToken })
          );

          dispatch({ type: "SET-TOKEN", payload: encodedToken });
          dispatch({ type: "SET-PROFILE", payload: createdUser });

          toast("Signed Up succesfully.Please login to continue");

          navigate("/auth");

          // navigate("/products");
          // setUserState({...userState,login:true})
        } else if (sendreq.status === 422) {
          toast.error(
            "User email already exists! Please try signing up with another email!"
          );
        }
      } catch (e) {
        // console.log("error,", e);
      }
    } else {
      toast("Your password is not matching ");
    }
  };

  //function call  to set token while login
  const loginHandler = async ({ email, password }) => {
    try {
      const passobj = { email, password };
      const sendreq = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passobj),
      });
      if (sendreq.status === 200 || sendreq.status === 201) {
        const { foundUser, encodedToken } = await sendreq.json();

        dispatch({ type: "SET-TOKEN", payload: encodedToken });
        dispatch({ type: "SET-PROFILE", payload: foundUser });
        navigate(location?.state?.from?.pathname || "/products");

        toast("Logged In succesfully");
      } else {
        toast("Your password or email address is incorrect");
        // console.log(sendreq.status)
      }
    } catch (e) {
      // console.log(e)
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setUserInfo(null);
    localStorage.removeItem("loginDetails");
    setIsLoggedIn(false);
    toast("Logged out successfully!");
    navigate("/");
  };
  const toggelSignInHandler = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  const localStorageItem = JSON.parse(localStorage.getItem("loginDetails"));
  useEffect(() => {
    if (localStorageItem) {
      dispatch({ type: "SET-PROFILE", payload: localStorageItem?.user });
      dispatch({ type: "SET-TOKEN", payload: localStorageItem?.token });
    }
  }, []);

  const ValuesToBePassed = {
    state,
    dispatch,
    isLoggedIn,
    toggelSignInHandler,
    userState,
    setUserState,
    signUpHandler,
    loginHandler,
    token,
    userInfo,
    logoutHandler,
  };
  return (
    <AuthProviderkey.Provider value={ValuesToBePassed}>
      {children}
    </AuthProviderkey.Provider>
  );
};
export default AuthProvider;
export const AuthContext = () => useContext(AuthProviderkey);
