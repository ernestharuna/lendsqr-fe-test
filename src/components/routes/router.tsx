import { createBrowserRouter, Navigate } from "react-router-dom";
// Layout import
import Root from "../layouts/root";

// Routes import
import Dashboard from "./dashboard";
import Index, { loader as RootLoader } from "./users";
import Login from "./login";
import User, { loader as UserLoader } from "./users/user";
import ErrorPage from "../shared/error-page";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                        loader: RootLoader,
                    },
                    {
                        path: "dashboard",
                        element: <Navigate to="/" />
                    },
                    {
                        path: "users",
                        element: <Index />,
                        loader: RootLoader
                    },
                    {
                        path: "users/:userId",
                        element: <User />,
                        loader: UserLoader
                    },
                ]
            }
        ]
    }
])

export default router;