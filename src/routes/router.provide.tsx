import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashBoard } from "../page/Dashboard/Dashboard";
import { Auth } from "../page/Auth/Auth";
import { Login } from "../layout/Auth/Login/Login";
import { Module } from "../page/Management/Module/Module";
import { Roles } from "../page/Management/Roles/Roles";
import { School } from "../page/Management/School/School";
import { User } from "../page/Management/User/User";
import { Management } from "../page/Management/Index";

import Profile from "../page/Profile/Profile";

import ChangePassword from "@/page/Profile/components/ChangePassword";
import PersonalInfo from "@/page/Profile/components/PersonalInfo";
import Settings from "@/page/Profile/components/settings";

import { instance } from "../instance/axiosInstance";

export const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <DashBoard />,
            errorElement: <h1>En produccion</h1>,

            children: [
                {
                    path: "administracion",
                    element: <Management />,
                    children: [
                        {
                            path: "colegio",
                            element: <School />
                        },
                        {
                            path: "modulos",
                            element: <Module />
                        },
                        {
                            path: "usuarios",
                            element: <User />
                        },
                        {
                            path: "roles",
                            element: <Roles />
                        }
                    ]
                },
                {
                    path: "user/profile",
                    element: <Profile />,
                    children: [
                        {
                            path: "personal",
                            element: <PersonalInfo />,
                            loader: async () => {
                                const { data } = await instance.get("user/profile");
                                return data.data;
                            }
                        },
                        {
                            path: "change/password",
                            element: <ChangePassword />
                        },
                        {
                            path: "settings",
                            element: <Settings />
                        }
                    ]
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

