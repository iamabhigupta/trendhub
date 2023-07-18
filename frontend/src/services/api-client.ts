import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL_DEV } from '../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL_DEV,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<T>(this.endpoint, config);
    return res.data;
  };

  get = async (id: string) => {
    const res = await axiosInstance.get<T>(this.endpoint + '/' + id);
    return res.data;
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
