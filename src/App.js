// import "./App.css";
import logo from "./logo.png";
import { Routes,Route , NavLink} from "react-router-dom"
import ShowProducts from "./pages/homePage/Products";
import WishList from "./pages/wishlist/WishList";
import Home from "./pages/landing/Landing"
import Cart from "./pages/cart/Cart"
import Mockman from "mockman-js";
import Navbar from "./components/navbar/Navbar"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import ProductDetail from "./pages/productInDetail/ProductDetail"
import CheckOut from './pages/checkout/Chekout'
import  {RequiresAuth } from "./components/requiresAuth/RequiresAuth"
import {USerProfile} from "./pages/profile/USerProfile"


import Address from "./pages/adress/Address"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
   
     <Navbar />
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
