import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre {
    id:number;
    name:string;
    slug:string;
}
export interface FetchGenreResponse {
    count:number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const[loadingSkelaton, setLoadingSkelaton] = useState(true);
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGenreResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenre(res.data.results);
                setLoadingSkelaton(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoadingSkelaton(false);
            });
        return () => controller.abort();
    }, []);
    return { genres, error,loadingSkelaton };
}
export default useGenres;