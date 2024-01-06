import axios, { AxiosError } from "axios";
import api from "./connAPI"

export const getUserRequire = async (profile: string) => {
    try {
        const response = await api.get(profile);
        return response;
    }catch(error){
        if(axios.isAxiosError(error)){
            const axiosError = error as AxiosError;
            console.log(`Erro na requisição GET ao buscar usuário: ${error}`);
            return axiosError.response?.status;
        }
        console.log(`Erro desconhecido ao buscar usuário: ${error}`);
    }
}