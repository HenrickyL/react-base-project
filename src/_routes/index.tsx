import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../_pages/Login";
import { Home } from "../_pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {path: '/', element: <h1>home</h1>},
            {path: '/*', element: <h1>aaa</h1>}
        ]
    },
    {
        path: 'test',
        element:
            <PrivateRoute children={<h1>Test</h1>}/>
    },

    {
        path: 'login',
        element:
           <Login />
    },

    {
        path: '*',
        element:
           <h1>Not Found</h1>
    },

])