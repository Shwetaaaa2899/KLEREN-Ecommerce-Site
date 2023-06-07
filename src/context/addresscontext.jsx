import { useState , createContext, useContext,useReducer } from "react"
import AddressReducer,{initialState} from "../reducer/addressreducer"
import { useEffect } from "react"
import { AuthContext} from "./authcontext"
 export const AddressProviderkey = createContext()


 export const AddresssProvider = ({children}) =>{
   
    
    // const AddressReducer = (state,action) =>

    const [state,dispatch] = useReducer(initialState,AddressReducer)


const  valuesToBePassed = { state,dispatch } 
return <AddressProviderkey.Provider value = {valuesToBePassed}>{children}</AddressProviderkey.Provider>


 }

 export default AddresssProvider;
 export const AddressContext  = () => useContext(AddressProviderkey)