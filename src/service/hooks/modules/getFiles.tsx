import { instance } from "@/instance/axiosInstance";
import { onLoad } from "@/service/context/features/load";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

interface ErrorResponse {
    data: any;
    status: number;
}

interface ErrorRequest {
    request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

const GetFetchFiles = <C extends any>() => {
    const dispatch = useDispatch();
    const [data, setData] = useState<C>();
    const [error, setError] = useState<interfaceError>();

    const fetch = useCallback(async (url: string, header?: any) => {
        try {

            dispatch(onLoad({ isLoad: true }));
            const data = await (
                await instance.get(url,{responseType: "blob"} )
            ).data;
            setData(data);
            dispatch(onLoad({ isLoad: false }));
        } catch (error: any) {
            if (error.response) {
                setError({ data: error.response.data, status: error.response.status });
            } else if (error.request) {
                setError({ request: error.request });
            } else {
                console.log("Error", error.message);
            }
        }
    }, []);


    return { error, fetch, data };
};

export { GetFetchFiles };
