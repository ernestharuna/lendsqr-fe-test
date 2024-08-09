import { createBrowserRouter, Navigate } from "react-router-dom";
// Layout import
import Root from "../layouts/root";

// Routes import
import Dashboard from "./dashboard";
import Index, {loader as UserLoader}  from "./users";
import Login from "./login";
import User from "./users/user";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "dashboard",
                element: <Navigate to="/" />
            },
            {
                path: "users",
                element: <Index />,
                loader: UserLoader
            },
            {
                path: "users/:userId",
                element: <User />
            },
        ]
    }
])

export default router;