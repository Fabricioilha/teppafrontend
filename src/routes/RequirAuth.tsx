import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthGoogleContext } from "../context/authGoogle"

type Props = {
  element: JSX.Element
}

const RequireAuth = ({element}:Props) => {
    const auth = useContext(AuthGoogleContext)

    return auth.user? element : <Navigate to="/login"/>
}
export default RequireAuth