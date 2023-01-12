import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashBoard } from "../page/Dashboard/Dashboard";


export const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <DashBoard />,
            errorElement: <h1>En produccion</h1>
        }
    ]);

    return <RouterProvider router={router} fallbackElement={<h1>En produccion</h1>} />
}