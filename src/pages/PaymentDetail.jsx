import { CartListState} from "../context/CartContext"
import { AuthContext} from "../context/authcontext"
const PaymentDetail = () =>{
    const { state:{totalprice,cart}} = CartListState()
    const { token} = AuthContext()
    return <>
  {

    cart?.length > 0  && <div>
    <h1>Total Price is:{totalprice}</h1>
  
    </div>
  }     
        
    </>

}
export default PaymentDetail