import { createBrowserRouter } from "react-router-dom";
// Layout import
import Root from "../layouts/root";

// Routes import
import Dashboard from "./dashboard";
import Index from "./users";
import Login from "./login";

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
                path: "users",
                element: <Index />
            }
        ]
    }
])

export default router;