import { useState, useEffect } from "react";
import { instance, controller } from "../../instance/axiosInstance";
import { Person } from "../../page/Management/User/components/data";
import { useDispatch } from "react-redux";
import { onLoad } from "../context/features/load";

interface ErrorResponse {
    data: any;
    status: number;
}

interface ErrorRequest {
    request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

export const GetInfo = (url: string) => {

    const dispatch = useDispatch();

    const [state, setState] = useState<Person[]>();
    const [error, setError] = useState<interfaceError>();

    useEffect(() => {
        const http = async () => {
            try {
                dispatch(onLoad({ isAuth: true }));
                const resp = await instance.get("api/" + url, { method: "GET" });
                setState(resp.data.users);
                dispatch(onLoad({ isAuth: true }));
            } catch (error: any) {
                if (error.response) {
                    setError({ data: error.response.data, status: error.response.status });
                    dispatch(onLoad({ isAuth: true }))
                } else if (error.request) {
                    setError({ request: error.request });
                    dispatch(onLoad({ isAuth: true }))
                } else {
                    console.log("Error", error.message);
                    dispatch(onLoad({ isAuth: true }))
                }
            }
        }
        http();
    }, [url]);


    return { state, error, controller }
}