import { useState, useEffect } from "react";
import { instance, controller } from "../../instance/axiosInstance";
import { Person } from "../../page/Management/User/data";
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
                dispatch(onLoad(true));
                const resp = await instance.get("api/" + url, { method: "GET" });
                setState(resp.data.users);
                dispatch(onLoad(false));
            } catch (error: any) {
                if (error.response) {
                    setError({ data: error.response.data, status: error.response.status });
                    dispatch(onLoad(false))
                } else if (error.request) {
                    setError({ request: error.request });
                    dispatch(onLoad(false))
                } else {
                    console.log("Error", error.message);
                    dispatch(onLoad(false))
                }
            }
        }
        http();
    }, [url]);


    return { state, error, controller }
}