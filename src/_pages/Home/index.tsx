import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";

export const Home = ()=>{
    const { user } = useAuth();

    return (!user ? 
        <div>
            <h1>Home</h1>
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}