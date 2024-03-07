import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
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