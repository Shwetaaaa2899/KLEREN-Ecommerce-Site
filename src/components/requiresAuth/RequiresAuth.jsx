import { Navigate } from "react-router-dom"
import { AuthContext} from "../../context/authcontext"
import { useLocation } from "react-router-dom"

export const RequiresAuth = ({children}) =>{
    const {state:{token}} = AuthContext()
    const location = useLocation()

return token?children:

<Navigate to = "/auth"  state = {{from:location}}/>


}

