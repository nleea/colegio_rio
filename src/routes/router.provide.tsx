import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashBoard } from "../page/Dashboard/Dashboard";
import { Auth } from "../page/Auth/Auth";
import { Login } from "../layout/Auth/Login/Login";
import { Module } from "../layout/Management/Module/Module";
import { Roles } from "../layout/Management/Roles/Roles";
import { School } from "../layout/Management/School/School";
import { User } from "../layout/Management/User/User";

export const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <DashBoard />,
            errorElement: <h1>En produccion</h1>,
            children: [
                {
                    path: "administracion/colegio",
                    element: <School />
                },
                {
                    path: "administracion/modulos",
                    element: <Module />
                },
                {
                    path: "administracion/usuarios",
                    element: <User />
                },
                {
                    path: "administracion/Roles",
                    element: <Roles />
                }
            ]
        },
        {
            path: "auth",
            element: <Auth />,
            children: [
                {
                    path: "login",
                    element: <Login />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} fallbackElement={<h1>En produccion</h1>} />
}

