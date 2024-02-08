import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class RAxios {
  instance: AxiosInstance
  constructor(
    config: AxiosRequestConfig,
    responseInterceptors?: {
      onFulfilled?: (value: any) => any
      onRejected?: (error: any) => any
    }
  ) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    const { onFulfilled, onRejected } = Object.assign(
      {
        onFulfilled: (response: AxiosResponse) => {
          // 处理响应数据
          if (response.data.code !== 200) {
            return Promise.reject(response.data)
          }
          response.data = response.data.data
          return response.data
        },
        onRejected: (error: AxiosError) => {
          return Promise.reject(error)
        }
      },
      responseInterceptors
    )
    this.instance.interceptors.response.use(onFulfilled, onRejected)
  }
  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.get(url, config) as Promise<T>
  }
  post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.post(url, data, config) as Promise<T>
  }
}

/**
 * 发送get请求
 * @param url 请求地址
 * @param config 请求配置
 * @returns Promise
 */
export const rawGetRequest = (url: string, config?: AxiosRequestConfig) => {
  return axios.get(url, config)
}

/**
 * 发送post请求
 * @param url 请求地址
 * @param data 请求数据
 * @param config 请求配置
 * @returns Promise
 */
export const rawPostRequest = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config)
}
