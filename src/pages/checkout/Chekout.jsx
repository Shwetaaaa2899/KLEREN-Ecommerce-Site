import { CartListState} from "../../context/cartContext"
import { AuthContext} from "../../context/authcontext"
import {AddressModal} from "../../components/address/AdressModal"
import "./Checkout.css"
import { toast } from 'react-toastify'
import { useState } from "react"
import { PaymentModal } from "../../components/paymentModal/PaymentModal"
const CheckOut = () =>{
    const { state:{totalprice,cart}} = CartListState()
   
    const total = cart?.length>0 &&
     cart?.reduce((acc,item) =>  acc +=  item?.qty && item?.qty >=1 ? item?.qty * item.price
    :
    item?.price  
, 0 )  

const {state:{address}} = AuthContext();

const userAddress = address
const [finaladd,setFinaladd] = useState(address[0])
const [isAddressSelected,setAddressSelected] = useState(false)
const addAddress = (data) => {
}

console.log(userAddress)
//  address modal
const [modal,setModal] = useState(false)
const openModal = () =>setModal(true)
const closeModal = () =>setModal(false)
//address modal end

//payment modal begins
const [ placeOrder, setPlaceOrder] = useState(false)
const closePlaceOrderModal = () =>setPlaceOrder(false)
const openPlaceOrderModal = () =>
{
  
  if(!isAddressSelected)
  {
    toast("Please select an address to continue")
  }
  else{
    setPlaceOrder(true)
  }
}
const totalAmount = total-(total/2)

    return<div  className="checkout-wrapper">
     <h3>CHECKOUT</h3>
     <div className="container-wrapper">
    
     <div  className="left-section">
     <div  className="address-wrapper">
   
    {/* <button onClick = {openModal} >add address</button> */}
    {
      userAddress.length>0  && userAddress.map((details) => 
      <div className="address-card">
      <p>  
<input type = "radio" name = "address"  onChange = {()=>{setAddressSelected(true);
setFinaladd(details)
}}/>
 <strong>{details.Name}</strong> 
</p>
<p>
  {details.line1} ,{details.area},{details.city},
  {details.pincode} , {details.state}
</p>
<p><strong>Phone:</strong> {details.phone}</p>

</div>
       )
      



    }
  {
      modal &&  <AddressModal  closeModal= {closeModal} addAddress= {addAddress}/>
    }
    {
  isAddressSelected  && placeOrder &&  <PaymentModal  closePlaceOrderModal={closePlaceOrderModal}/>
}<button onClick = {setModal}>Add Address</button>
</div>
    </div>

<div className="right-section">
<div className="section order-details">
<hr />
<h3>ORDER DETAILS</h3>
<hr/>
<div className="child">
<div className="child-left"><strong>Item</strong>

{
cart?.length>0 &&
  cart?.map((item) => <p>{item.title}</p>)
} </div>
<div className="child-right"><strong> Quantity</strong>
{
  cart?.length>0 &&
  cart?.map((item) => <p>{item.qty}</p>)
} 
</div>

</div>
</div>
<div className="section price-deatils">
<hr />
<h3>PRICE DETAILS</h3>
<hr/>
<div className="child">
<div className="child-left">

<p>Price ( {cart.length} items)</p>
<p>Discount</p>
<p>Delievery Charges</p>
<p>Coupon Discount</p>
<p><strong>Total Amount</strong></p>
</div>
<div className="child-right">
<p>₹  {total}</p>
<p>-{total/2}</p>
<p>FREE</p>
<p>₹   0</p>
<p><strong>{totalAmount}</strong></p>
</div>

</div>
</div>
<div className=" section address-deatils">
<hr />
<h3>DELEIVER TO</h3>
<hr/>

<p>  

 <strong>{finaladd?.Name}</strong> 
</p>
<p>
  {finaladd?.line1} ,{finaladd?.area},{finaladd?.city},
  {finaladd?.pincode} , {finaladd?.state}
</p>
<p><strong>Phone:</strong> {finaladd?.phone}</p>

   <button className="place-prder-btn" onClick = {openPlaceOrderModal}>Place Order</button>
  
</div>
 

</div>


        
 
  
    </div>
 
    </div>

}
export default CheckOut;