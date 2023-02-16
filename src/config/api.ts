import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

const isServer = !!window ? false : true;

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    Authorization: !isServer ? localStorage.getItem("token") : null,
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    return req;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 요청 오류가 있는 작업 수행
    if (error.response) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data.data;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    if (error.response) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
);

export { api };
