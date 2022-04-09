import axios, { AxiosRequestConfig } from 'axios';

import { getServerPath } from '../utils/get-server-path';

const instance = axios.create({
  baseURL: getServerPath(''),
  withCredentials: true,
});

export const api = {
  get: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance
      .get(url, {
        params: data,
        responseType: 'json',
        ...config,
      })
      .then(({ data }) => data),
  post: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.post(url, data, config).then(({ data }) => data),
  patch: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.patch(url, data, config).then(({ data }) => data),
  put: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.put(url, data, config).then(({ data }) => data),
  delete: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.delete(url, { ...config, data }).then(({ data }) => data),
};
