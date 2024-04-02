import "./AddressModal.css"
import { useState } from "react"
import { toast } from 'react-toastify'
import { AuthContext } from "../../context/authcontext"
export const AddressModal = ({closeModal ,addAddress}) =>{

    const closeModalHandler = (e) =>{
        if(e?.target.className === "modal-wrapper" || e.target.className === "modal-container")
        {
            closeModal()
        }
    }
    const {dispatch} = AuthContext()
    const [input,setInput] = useState({
        Name:"",
        type:"",
        line1:"",
        area:"",
        city:"",
      state:"",
      pincode:"",
      phone:""
      
      })
      const setAddInfoHandler = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})

      }

    //   console.log(input)
    
    const submitHandler = (e) =>{
        e.preventDefault();
  //  addAddress(input)
  dispatch({type:"ADD-ADDRESS",payload:input})
   toast("Address added successfully")
       
   closeModal()

    }
    return <>
<div className="modal-wrapper" onClick={closeModalHandler}></div>
<div className="modal-container" onClick = {closeModalHandler}>
<div className="modal">
<button className="cancel-btn" onClick={closeModal}>
            &times;
          </button>
<form className="form-login"  >
            <div className="left-side">
              <label>
                <p>
                  <h3>Full Name:</h3>

                  <input
                    required
                    
                    type="text"
                    name="Name"
                    onChange={setAddInfoHandler}
                    placeholder="Your Name"
                  />
                </p>
              </label>

              <label>
                <p>
                  <h3>Address:</h3>

                  <input
                    required
                   
                    type="text"
                    name="line1"
                    onChange={setAddInfoHandler}
                    placeholder="Address"
                  />
                </p>
              </label>

              <label>
                <p>
                  <h3>Phone:</h3>

                  <input
                    required
                
                    type="text"
                    name="phone"
                    onChange={setAddInfoHandler}
                    placeholder="Phone Number"
                  />
                </p>
              </label>

              <div className="btn-login-container">
                <button type="submit" className="submitBtn" onClick = {submitHandler}>
                  Submit
                </button>
                
              </div>
            </div>
          </form>
          
          </div>    
        </div>
        
    </>

}