import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../_hooks/auth";
import { Input } from "../_components/Input";
import { useTheme } from "../_hooks/theme";

const Home = ()=>{
    const { user } = useAuth();
    return (!user ? 
        <div>
            <Input.Root>
                <Input.Field>
                    <Input.Label htmlFor="password" text="Password"/>
                    <Input.Password/>
                </Input.Field>
            </Input.Root>
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'test',
        element:
            <PrivateRoute children={<h1>Test</h1>}/>
    },

    {
        path: 'signin',
        element:
           <h1>signin</h1>
    },

])