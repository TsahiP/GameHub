import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform {
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    metacritic:number;
    parent_platforms:{platform:Platform}[];
}
export interface FetchGameResponse {
    results: Game[];
}
const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const[loadingSkelaton, setLoadingSkelaton] = useState(true);
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGameResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoadingSkelaton(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoadingSkelaton(false);
            });
        return () => controller.abort();
    }, []);
    return { games, error,loadingSkelaton };
}

export default useGames;