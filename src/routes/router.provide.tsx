import { createBrowserRouter, json, redirect, RouterProvider } from "react-router-dom";
import { DashBoard } from "../page/Dashboard/Dashboard";
import { Auth } from "../page/Auth/Auth";
import { Login } from "../layout/Auth/Login/Login";
import { Module } from "../page/Management/Module/Module";
import { Roles } from "../page/Management/Roles/Roles";
import { School } from "../page/Management/School/School";

import { User } from "../page/Management/User/User";
import { TableUser } from "@/page/Management/User/components/TableUser";
import { RegisterUsers } from "@/page/Management/User/components/AddUser";
import { Management } from "../page/Management/Index";
import { TablaFuncionarios } from "@/page/Management/User/components/funcionarios/TableFuncionarios";

import Profile from "../page/Profile/Profile";

import ChangePassword from "@/page/Profile/components/ChangePassword";
import PersonalInfo from "@/page/Profile/components/PersonalInfo";
import Settings from "@/page/Profile/components/settings";
import { RouteGuard, RouteGuardComponent } from "@/components/RouterGuard/RouterGuard";
import { instance } from "../instance/axiosInstance";
import { Toaster } from "react-hot-toast";

export const Router = () => {

    const { verify } = RouteGuard();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <DashBoard />,
            errorElement: <h1>En produccion</h1>,
            loader: async () => {
                const token = localStorage.getItem("token")

                const { valid } = await verify("auth/token/verify", token!)
                if (!valid) return redirect("auth/login")
                return null
            },
            children: [
                {
                    path: "administracion",
                    element: <RouteGuardComponent />,
                    children: [
                        {
                            path: "",
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
                                    element: <User />,
                                    children: [
                                        {
                                            path: "estudiantes",
                                            children: [
                                                {
                                                    path: "",
                                                    element: <TableUser />
                                                }
                                            ]
                                        },
                                        {
                                            path: "funcionarios",
                                            children: [
                                                {
                                                    path: "",
                                                    element: <TablaFuncionarios />
                                                }
                                            ]
                                        },
                                        {
                                            path: "register",
                                            element: <RegisterUsers />,
                                        }
                                    ]
                                },
                                {
                                    path: "roles",
                                    element: <Roles />,

                                }
                            ]
                        }
                    ]
                },
                {
                    element: <RouteGuardComponent />,
                    children: [
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

    return (
        <>
            <Toaster position={"top-right"} />
            <RouterProvider router={router} fallbackElement={<h1>En produccion</h1>} />
        </>
    )
}

