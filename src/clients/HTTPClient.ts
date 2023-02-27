import axios, { AxiosRequestConfig } from 'axios';

class HttpClient {
    public static defaultAxiosConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    };

    public static get = <T>(endPoint: string, config?: AxiosRequestConfig): Promise<T> =>
        axios
            .get<T>(endPoint, {
                url: endPoint,
                ...this.defaultAxiosConfig,
                ...config,
                method: 'GET'
            })
            .then((res) => res.data);

    public static post = <T>(endPoint: string, data: unknown, config?: AxiosRequestConfig): Promise<T> =>
        axios
            .post<T>(endPoint, data, {
                url: endPoint,
                ...this.defaultAxiosConfig,
                ...config,
                method: 'POST'
            })
            .then((res) => res.data);

    public static put = <T>(endPoint: string, data: unknown, config?: AxiosRequestConfig): Promise<T> =>
        axios
            .put<T>(endPoint, data, {
                url: endPoint,
                ...this.defaultAxiosConfig,
                ...config,
                method: 'PUT'
            })
            .then((res) => res.data);

    public static delete = <T>(endPoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
        axios
            .delete<T>(endPoint, {
                url: endPoint,
                ...this.defaultAxiosConfig,
                ...config,
                method: 'DELETE',
                data
            })
            .then((res) => res.data);

    public static queryStringFromObject = (object: Record<string, any>) => {
        return Object.keys(object)
            .map((key) => `${key}=${object[key]}`)
            .join('&');
    };
}

export default HttpClient;
