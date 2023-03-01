import { instance } from "../../instance/axiosInstance";

export const RouteGuard = () => {
    

    const verify = async (url: string, token: string) => {
        const { data } = await instance.post(url, { "token": token });
        return { valid: data.ok }
    }
    return {  verify }
};

export default RouteGuard;