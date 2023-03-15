import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { instance } from "../../instance/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "@/service/context/features/load";

export const RouteGuard = () => {

    const dispatch = useDispatch()

    const verify = async (url: string, token: string) => {
        try {
            const { data } = await instance.post(url, { "token": token, "refreshToken": localStorage.getItem("tokenRefresh")! });
            dispatch(isAuth({ isAuth: data.ok }));
            if (data.data.is) {
                localStorage.removeItem("token")
                localStorage.setItem("token", data.data.token);
            }
            return { valid: data.ok }
        } catch (error) {
            return { valid: false }
        }
    }
    return { verify }
};


export const RouteGuardComponent = () => {
    const auth = useSelector((store: any) => store.store.isAuth);
    const location = useLocation()
    const { verify } = RouteGuard();

    useEffect(() => {
        const d = async () => {
            await verify("auth/token/verify", localStorage.getItem("token")!);
        }
        d();
        return () => {
            d();
        }
    }, [location.pathname]);

    return auth ? <Outlet /> : <Navigate replace to={"/auth/login"} />
}

export default RouteGuard;