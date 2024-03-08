import { Navigate } from "react-router-dom";
import { useAuth } from "../_hooks/auth";

export const PrivateRoute = ({children}:{children: React.ReactNode})=>{
    const { user } = useAuth();
    return user? children : <Navigate to="/signin" />
}