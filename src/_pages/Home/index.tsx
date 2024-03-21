import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Header } from "../../_components/Header";


export const Home = ()=>{
    const { user } = useAuth();

    return (!user ? 
        <div>
            <Header.Root>
                <Header.Empty />
                Logo
                <Header.Field>
                </Header.Field>
            </Header.Root>
            
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}