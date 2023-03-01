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

export const GetAll = (url: string) => {

    const dispatch = useDispatch();

    const [state, setState] = useState<Person[]>();
    const [error, setError] = useState<interfaceError>();

    useEffect(() => {
        const http = async () => {
            try {
                dispatch(onLoad({ isLoad: true }))
                const { data } = await instance.get(url);
                setState(data.data);
                dispatch(onLoad({ isLoad: false }))
            } catch (error: any) {
                if (error.response) {
                    setError({ data: error.response.data, status: error.response.status });
                    dispatch(onLoad({ isLoad: false }))
                } else if (error.request) {
                    setError({ request: error.request });
                    dispatch(onLoad({ isLoad: false }))
                } else {
                    console.log("Error", error.message);
                    dispatch(onLoad({ isLoad: false }))
                }
            }
        }
        http();
    }, [url]);


    return { state, error, controller }
}