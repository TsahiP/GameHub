import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count?:number;
    results: T[];
}
const useData =<T> (endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const[loadingSkelaton, setLoadingSkelaton] = useState(true);
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoadingSkelaton(false);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
                setLoadingSkelaton(false);
            });
        return () => controller.abort();
    }, deps? [...deps]:[]);
    return { data, error,loadingSkelaton ,isLoading};
}
export default useData;