import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// handler api
export const getData = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.get<T>(url, config);
  return response.data;
};

export const postData = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.post<T>(url, data, config);
  return response.data;
};

export const putData = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.put<T>(url, data, config);
  return response.data;
};

export const deleteData = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.delete<T>(url, config);
  return response.data;
};

// khusus form data
export const postFormData = async <T = any>(
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.post(url, formData, config);
  return response.data;
};

export const putFormData = async <T = any>(
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await api.put(url, formData, config);
  return response.data;
};
