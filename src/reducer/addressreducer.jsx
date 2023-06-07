export const initialState = {
    Name:"",
    area:"",
    city:"",
state:"",
pincode:"",
phone:""
}
const dummy = {
    name:"Adarsh Balika",
    area:"Bandra West",
    city:"Mumbai",
state:"Maharashtra",
pincode:"400010",
phone:"0999099900"

}
const AddressReducer = (state,action) =>{
   

    switch(action.type){

// case "GET-ADDRESS":
    // return { ...state,}
        case "EDIT-INFO":
            const {Name, area, city,state,pincode,phone} = action.payload
            return {...state, Name, area, city, state, pincode,phone}
            case "SAVE-INFO":
                console.log(action.payload,"reached 2nd")
                // return state
                // return {... action.payload}
           
        // case "DUMMY-DATA":

               
        //         return {... dummy}
             default:
            return state
        

    }
}
export default AddressReducer;