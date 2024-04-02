import { createContext, useContext } from "react"

 export const AddressProviderkey = createContext()


  const AddresssProvider = ({children}) =>{
   
    
//     // const AddressReducer = (state,action) =>

//     const [state,dispatch] = useReducer(initialState,AddressReducer)


const  valuesToBePassed = { } 
return <AddressProviderkey.Provider value = {valuesToBePassed}>{children}</AddressProviderkey.Provider>


 }

 export default AddresssProvider;
 export const AddressContext  = () => useContext(AddressProviderkey)