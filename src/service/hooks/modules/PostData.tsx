import { useCallback, useState } from "react";
import { instance } from "@/instance/axiosInstance";
import { useDispatch } from "react-redux";
import { onLoad } from "@/service/context/features/load";

interface ErrorResponse {
    data: any;
    status: number;
}

interface ErrorRequest {
    request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

const PostFetch = <C extends any>() => {
    const dispatch = useDispatch();
    const [data, setData] = useState<C>();
    const [error, setError] = useState<interfaceError>();

    const fetch = useCallback(async (url: string, body: any) => {
        try {
            dispatch(onLoad({ isLoad: true }));
            const data = await (
                await instance.post(url, body)
            ).data.data;
            setData(data);
            dispatch(onLoad({ isLoad: false }));
        } catch (error: any) {
            if (error.response) {
                setError({ data: error.response.data, status: error.response.status });
            } else if (error.request) {
                setError({ request: error.request });
            } else {
                setError(error)
                console.log("Error", error.message);
            }
        }
    }, []);

    return { error, fetch, data };
};

export { PostFetch };
