import { useCallback, useState, useEffect } from "react";
import { instance, controller } from "../../instance/axiosInstance";
import { Person } from "../../page/Management/User/data";
import axios from "axios";

interface ErrorResponse {
    data: any;
    status: number;
}

interface ErrorRequest {
    request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

export const GetAll = (url: string) => {

    const [state, setState] = useState<Person[]>();
    const [isLoad, setLoad] = useState(false);
    const [error, setError] = useState<interfaceError>();

    useEffect(() => {
        const http = async () => {
            try {
                const token = localStorage.getItem('token')
                setLoad(true);
                const resp = await instance.get("api/" + url, { method: "GET" });
                setState(resp.data.users);
                setLoad(false);
            } catch (error: any) {
                if (error.response) {
                    setError({ data: error.response.data, status: error.response.status });
                    setLoad(false);
                } else if (error.request) {
                    setError({ request: error.request });
                    setLoad(false);
                } else {
                    console.log("Error", error.message);
                    setLoad(false);
                }
            }
        }
        http()
    }, [url]);


    return { state, error, isLoad, controller }
}