import axios, { AxiosRequestConfig } from 'axios';

import { getServerPath } from '../utils/get-server-path';

const instance = axios.create({
  baseURL: getServerPath(''),
  withCredentials: true,
});

const extractFileName = (str?: string): string => str?.match(/.*filename=(.*\.(j|t)sx?).*/)?.[1] || '';

export const api = {
  get: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance
      .get(url, {
        params: data,
        responseType: 'json',
        ...config,
      })
      .then(({ data }) => data),
  getDownloadUrl: <D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<{ file: string, fileName: string }> =>
    instance
      .get(url, {
        params: data,
        responseType: 'blob',
        ...config,
      })
      .then(({ data, headers }) => ({
        file: window.URL.createObjectURL(new Blob([data])),
        fileName: extractFileName(headers['content-disposition'])
      })),
  post: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.post(url, data, config).then(({ data }) => data),
  patch: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.patch(url, data, config).then(({ data }) => data),
  put: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.put(url, data, config).then(({ data }) => data),
  delete: <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
    instance.delete(url, { ...config, data }).then(({ data }) => data),
};
