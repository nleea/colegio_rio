import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
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