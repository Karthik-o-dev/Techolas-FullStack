import { useEffect, useState } from "react"
import { api } from "../lib/axios";

export const useFetch = <T>(url: string) => {
    const [response, setResponse] = useState<{ data: T | null; loading: boolean; error: string | unknown }>({ data: null, loading: true, error: "" });

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get<T>(url);
                setResponse({ data: res.data, loading: false, error: "" })
            } catch (err) {
                setResponse({ data: null, loading: false, error: err })
            }
        })();
    }, []);

    return [response, setResponse] as const;
}