import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosResponseHeaders,
    RawAxiosRequestHeaders,
  } from "axios";
  import { plainToInstance } from "class-transformer";
  
  export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    config: any;
    request?: any;
  }
  
  export interface ServerResponse<T> {
    data: T;
  }
  
  export class ApiModule {
    private static instance: ApiModule;
    private axios: AxiosInstance = axios.create({});
    private token: string | null = "";
    private commonHeader: RawAxiosRequestHeaders;
  
    private constructor() {
      this.commonHeader = {
        "Content-Type": "application/json",
        // Todo 토큰방식에 맞춰 변경필요
        "X-Access-Token": "", 
      };
    }
  
    private setToken(): void {
      this.token = window.localStorage.getItem("token");
      // Todo 토큰방식에 맞춰 변경필요
      this.commonHeader["X-Access-Token"] = this.token;
    }
  
    private setAxiosInstance() {
      this.setToken();
      this.axios = axios.create({
        baseURL: '',
        headers: this.commonHeader,
        responseType: "json",
      });
    }
  
    public static getInstance(
    ): ApiModule {
      return this.instance || (this.instance = new this());
    }
  
    async get<T>(url: string, params?: T) {
      this.commonHeader["Content-Type"] = "application/json";
      this.setAxiosInstance();
      return await this.axios
        .get(url, {
          params: { ...params },
        })
        .then(this.handleSuccess)
        .catch(this.handleError);
    }
  
    async post<T>(
      url: string,
      params?: T,
      config?: AxiosRequestConfig
    ) {
  
      this.setAxiosInstance();
      return await this.axios
        .post(url, { ...params }, config)
        .then(this.handleSuccess)
        .catch(this.handleError);
    }
  
    async put<T>( url: string, params?: T) {
      this.commonHeader["Content-Type"] = "application/json";
      this.setAxiosInstance();
      return await this.axios
        .put(url, { params: { ...params } })
        .then(this.handleSuccess)
        .catch(this.handleError);
    }
  
    async patch<T>( url: string, params?: T) {
  
      this.commonHeader["Content-Type"] = "application/json";
      this.setAxiosInstance();
      return await this.axios
        .patch(url, params)
        .then(this.handleSuccess)
        .catch(this.handleError);
    }
  
    async delete( url: string) {
      this.commonHeader["Content-Type"] = "application/json";
      this.setAxiosInstance();
      return await this.axios
        .delete(url)
        .then(this.handleSuccess)
        .catch(this.handleError);
    }
  
    private handleSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
  
      return response;
    };
  
    private handleError = (error: any): AxiosError => {
      const { data } = error.response;
      const errorDto = plainToInstance(AxiosError, data);
  
      throw errorDto;
    };
  }