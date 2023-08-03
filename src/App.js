// import "./App.css";
import logo from "./logo.png";
import { Routes,Route , NavLink} from "react-router-dom"
import ShowProducts from "./pages/Products";
import WishList from "./pages/WishList";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import Filters from "./components/Filter"
import Mockman from "mockman-js";
import Navbar from "./components/Header"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProductDetail from "./pages/ProductDetail"
import Logout from "./pages/Logout"
import CheckOut from './pages/Chekout'
import  {RequiresAuth } from "./components/RequiresAuth"
import {USerProfile} from "./pages/USerProfile"
// import Profile from "./pages/Profile"

import Address from "./pages/Address"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
   
     <Header />
     <br/>
     <ToastContainer
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      <Routes>

        <Route path = "/" element={<Home />} />
        <Route path = "/products" element={<ShowProducts />} />
        <Route path = "/products/:categoryname" element={<ShowProducts />} />
        <Route path = "/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
        <Route path = "/profile" element = {<RequiresAuth><USerProfile/></RequiresAuth>} />
        
        <Route path = "/wishlist" element={<RequiresAuth><WishList /></RequiresAuth>} />
        <Route path = "/mockman" element={ < Mockman />} />
        <Route path = "/auth" element={ < Login />} />
        <Route path = "/signup" element={ < SignUp />} />
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route path = "/logout" element = { <Logout/>} />
        <Route path = "/checkout" element = {<CheckOut/>} />
     
        {/* <Route path = "/profile/" element = {<USerProfile/>} /> */}
   
        <Route path = "/profile/address" element = {<Address/>} />

        
      </Routes>
        {/* <h1>Hi</h1> */}
      </header>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
