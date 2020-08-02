import { AxiosResponse } from 'axios'
import ApiClient from "@/service/api.client"
import {UrlResponse} from "@/service/api.response";

class Api {
  getAll(): Promise<AxiosResponse<UrlResponse>> {
    return ApiClient.get('/')
  }

  get(code: string): Promise<AxiosResponse<URL>> {
    return ApiClient.get(`/${code}`)
  }

  add(originalUrl: string): Promise<AxiosResponse<URL>> {
    return ApiClient.post(`/shorten`, {originalUrl})
  }
}

export default new Api()