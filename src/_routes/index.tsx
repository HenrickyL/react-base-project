import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../_hooks/auth";

const Home = ()=>{
    const { user } = useAuth();
    return (!user ? <h1>Home</h1> :
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