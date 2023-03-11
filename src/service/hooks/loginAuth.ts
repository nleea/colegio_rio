import { useCallback, useState } from "react";
import { instance } from "../../instance/axiosInstance";
import { useDispatch } from "react-redux";
import { isError } from "@/service/context/features/load";
import { toast } from "react-hot-toast";
interface ErrorResponse {
  data: any;
  status: number;
}

interface ErrorRequest {
  request: any;
}

type interfaceError = ErrorResponse | ErrorRequest;

const AuthCustomHooks = () => {
  const dispatch = useDispatch();
  const [isLoad, setLoad] = useState(false);
  const [error, setError] = useState<interfaceError>();

  const fetch = useCallback(async (url: string, body: any) => {
    try {
      setLoad(true);
      const { token, user, resources } = await (
        await instance.post(url, body)
      ).data.data;

      localStorage.setItem("user", JSON.stringify(user.id));
      localStorage.setItem("token", token);
      localStorage.setItem("menu", JSON.stringify(resources));
      toast.success(`Bienvenido ${user.name}`);
      setLoad(false);
    } catch (error: any) {
      dispatch(isError({ isError: "Error" }));
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
