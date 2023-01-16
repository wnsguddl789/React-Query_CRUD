import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080', timeout: 1000 });

// 요청 인터셉터 추가하기
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 요청 오류가 있는 작업 수행
    if (error.response) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행

    return res.data;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    if (error.response) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
);

export { api };
