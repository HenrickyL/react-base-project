import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Notification } from "../../_components/Notification";

export const Home = ()=>{
    const { user } = useAuth();

    return (!user ? 
        <div>
            <h1>Home</h1>

            <Notification.Root>
                    aaa
            </Notification.Root>
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}