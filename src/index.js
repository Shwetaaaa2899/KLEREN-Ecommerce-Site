import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/productsContext"
import  AuthProvider from "./context/authcontext"
import WishListProvider from "./context/wishlistContext"
import CartListProvider from "./context/cartContext"
import  AddresssProvider from "./context/addresscontext"


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ProductsProvider>
  <AuthProvider>


  <CartListProvider>
  <WishListProvider>
  <AddresssProvider>
  
  <App />
  </AddresssProvider>
</WishListProvider>
</CartListProvider>
 
 
  </AuthProvider>
  </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
