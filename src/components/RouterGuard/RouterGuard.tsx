import { useState, useEffect } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { instance } from "../../instance/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "@/service/context/features/load";

export const RouteGuard = () => {

    const dispatch = useDispatch()

    const verify = async (url: string, token: string) => {
        const { data } = await instance.post(url, { "token": token });
        dispatch(isAuth({ isAuth: data.ok }));
        return { valid: data.ok }
    }
    return { verify }
};


export const RouteGuardComponent = () => {
    const auth = useSelector((store: any) => store.isLoad.isAuth);

    const { verify } = RouteGuard();

    useEffect(() => {
        const d = async () => {
            await verify("auth/token/verify", localStorage.getItem("token")!);
        }
        d();
        return () => {
            d();
        }
    },[]);

    return auth ? <Outlet /> : <Navigate replace to={"/auth/login"} ></Navigate>
}

export default RouteGuard;