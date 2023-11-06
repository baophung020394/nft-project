import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { useEffect, useState } from "react";

interface UseApiResult<TData> {
  data: TData | null;
  error: AxiosError | null;
  loading: boolean;
  refetch: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeRequest: (method: Method, body?: any) => void;
  setUrl: (url: string) => void;
}

const useApi = <TData>(
  initialUrl: string,
  isCallApi: boolean,
): UseApiResult<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    if (isCallApi) {
      fetchData();
      const intervalId = setInterval(() => {
        fetchData();
      }, 60000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, isCallApi]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<TData> = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error as AxiosError);
      setLoading(false);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const makeRequest = async (method: Method, body?: any) => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<TData> = await axios.request({
        method,
        url,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setError(error as AxiosError);
    }
    setLoading(false);
  };

  const refetch = () => {
    fetchData();
  };

  return { data, error, loading, refetch, makeRequest, setUrl };
};

export default useApi;
