import { CartListState} from "../context/CartContext"
import { AuthContext} from "../context/authcontext"
import {AddressModal} from "../components/AdressModal"
import "./css/Checkout.css"
import { toast } from 'react-toastify'
import { useState } from "react"
import { PaymentModal } from "../components/PaymentModal"
const CheckOut = () =>{
    const { state:{totalprice,cart}} = CartListState()
   
    const total =  cart.reduce((acc,item) =>  acc +=  item?.qty && item?.qty >=1 ? item?.qty * item.price
    :
    item?.price  
, 0 )  
const kaddress = [{
  Name:"Adarsh Balika",
  type:"Work",
  line1:"400,A wing",
  area:"Bandra West",
  city:"Mumbai",
state:"Maharashtra",
pincode:"400010",
phone:"0999099900"

}]
const {state:{address}} = AuthContext();

const userAddress = address
const [finaladd,setFinaladd] = useState(address[0])
const [isAddressSelected,setAddressSelected] = useState(false)
const addAddress = (data) => {
// dispatchEvent({type:""})
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

    return<div  className="checkout-wrapper">
     <h3>CHECKOUT</h3>
     <div className="container-wrapper">
    
     <div  className="left-section">
   
    {/* <button onClick = {openModal} >add address</button> */}
    {
      userAddress.length>0  && userAddress.map((details) => 
      <div className="address-card">
      <p>  
<input type = "radio" name = "address"  onChange = {()=>setAddressSelected(true)}/>
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

<div className="right-section">
<div className="section order-details">
<hr />
<h3>ORDER DETAILS</h3>
<hr/>
<div className="child">
<div className="child-left"><strong>Item</strong>

{
  cart.map((item) => <p>{item.title}</p>)
} </div>
<div className="child-right"><strong> Quantity</strong>
{
  cart.map((item) => <p>{item.qty}</p>)
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
<p><strong>{total}-{total/2}</strong></p>
</div>

</div>
</div>
<div className=" section address-deatils">
<hr />
<h3>DELEIVER TO</h3>
<hr/>

<p>  

 <strong>{finaladd.Name}</strong> 
</p>
<p>
  {finaladd.line1} ,{finaladd.area},{finaladd.city},
  {finaladd.pincode} , {finaladd.state}
</p>
<p><strong>Phone:</strong> {finaladd.phone}</p>

   <button  onClick = {openPlaceOrderModal}>Place Order</button>
  
</div>
 

</div>


        
 
  
    </div>
 
    </div>

}
export default CheckOut;