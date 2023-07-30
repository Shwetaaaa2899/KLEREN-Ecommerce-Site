import "./AddressModal.css"
import { useState } from "react"
import { toast } from 'react-toastify'
 
import { CartListState } from "../context/CartContext"
export const PaymentModal = ({closePlaceOrderModal }) =>{
    const closeModalHandler = (e) =>{
        if(e?.target.className === "modal-wrapper" || e.target.className === "modal-container")
        {
            closePlaceOrderModal()
        }
    } 
 const {cartdispatch}= CartListState()
    
const emptyCart = (e) =>{
    e.preventDefault();
    cartdispatch({type:"EMPTY-CART"})
    closePlaceOrderModal()
}
    return <>
    <div className="modal-wrapper" onClick={closeModalHandler}></div>
    <div className="modal-container" onClick = {closeModalHandler}>
    <div className="modal">
    <button className="cancel-btn" onClick={closePlaceOrderModal}>
            &times;
          </button>
    <div className="form-login"  >

   
       <p> Yayyy !! You have successfully placed the order
       </p> 
       <button onClick={emptyCart}>Okay</button>
       </div>  </div>
    </div>
    </>


}