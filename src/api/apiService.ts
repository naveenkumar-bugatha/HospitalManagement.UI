import axios, { AxiosResponse } from 'axios';
import {ApiConstants} from './apiConstants';

const axiosInstance = axios.create({
    baseURL: ApiConstants.BaseURI,
    timeout: 1000,
    headers:{ 'Access-Control-Allow-Origin': '*' }
});

axiosInstance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

const request = async (method: string, url: string, body?: any): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.request({
            method,
            url,
            data: body,
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to perform ${method.toUpperCase()} request to ${url}:`, error);
        throw error;
    }
};

const ApiService = {

    get: async (urlRoute: string): Promise<any> => request('get', urlRoute),

    post: async (urlRoute: string, body: any): Promise<any> => request('post', urlRoute, body),

    put: async (urlRoute: string, body: any): Promise<any> => request('put', urlRoute, body),

    delete: async (urlRoute: string): Promise<any> => request('delete', urlRoute),
};

export default ApiService;
