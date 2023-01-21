import { useCallback, useState } from "react";
import { instance } from "../../instance/axiosInstance";

interface ErrorResponse {
  data: any;
  status: number;
}

interface ErrorRequest {
  request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

const AuthCustomHooks = () => {
  const [isLoad, setLoad] = useState(false);
  const [error, setError] = useState<interfaceError>();

  const fetch = useCallback(async (url: string, body: any) => {
    try {
      setLoad(true);
      const resp = await (await instance.post(url, body)).data;
      localStorage.setItem("user", JSON.stringify(resp.usuario[0]));
      localStorage.setItem("token", resp.token);
      setLoad(false);
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

  return { isLoad, error, fetch };
};

export { AuthCustomHooks };
