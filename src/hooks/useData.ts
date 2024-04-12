import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
    count?:number;
    results: T[];
}
const useData =<T> (endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[loadingSkelaton, setLoadingSkelaton] = useState(true);
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results);
                setLoadingSkelaton(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoadingSkelaton(false);
            });
        return () => controller.abort();
    }, []);
    return { data, error,loadingSkelaton };
}
export default useData;