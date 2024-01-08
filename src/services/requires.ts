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

export const getReposRequire =async (profile: string) => {
    try{
        const response = await api.get(`${profile}/repos`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            const axiosError = error as AxiosError;
            console.log(`Erro na requisição GET ao buscar repositórios públicos: ${error}`);
            return axiosError.response?.status;
        }
        console.log(`Erro desconhecido ao buscar repositórios públicos: ${error}`);
    }
}

export const getLanguagesRequire =async (url: string) => {
    try{
        const response = await api.get(url);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            const axiosError = error as AxiosError;
            console.log(`Erro na requisição GET ao buscar linguagens do repositório: ${error}`);
            return axiosError.response?.status;
        }
        console.log(`Erro desconhecido ao buscar linguagens do repositório: ${error}`);
    }
}