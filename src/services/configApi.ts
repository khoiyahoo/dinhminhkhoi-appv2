import axios, { type AxiosResponse, type AxiosError } from "axios";

export interface ResData<T = string> {
  code: number;
  data: T;
  message: string;
}
export interface ErrorData<T = string> extends ResData<T> {
  status: number;
  statusText: string;
}
export interface MappedResponse<T = string> {
  data?: T;
  error?: AxiosError<ResData<T>> | ErrorData<T>;
}

export async function requestHandler<T = string>(
  callApi: () => Promise<AxiosResponse<T>>
): Promise<MappedResponse<T>> {
  try {
    const { data }: AxiosResponse<T> = await callApi();
    return { data };
  } catch (e: unknown) {
    const mayAxiosError = e as AxiosError<ResData<T>>;
    if (
      mayAxiosError &&
      mayAxiosError.response &&
      mayAxiosError.response.data
    ) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw {
        ...mayAxiosError.response.data,
        status: mayAxiosError.response.status,
        statusText: mayAxiosError.response.statusText,
      };
    }
    throw mayAxiosError;
  }
}
const api = axios.create({
  baseURL:
    "https://api.eazymock.net/mock/d7fde72b-5b01-4a99-832c-d07276d366e4/",
});

export default api;
