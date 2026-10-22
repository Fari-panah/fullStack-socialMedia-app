import { Outlet, Navigate } from "react-router-dom"
import { useCurrentUser } from '../stores/auth.store'

const PrivateRoute = () => {
    const currentUser = useCurrentUser()
  return currentUser ? <Outlet /> : <Navigate to='/login' />
    
}

export default PrivateRoute
