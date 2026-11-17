import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/axios"
import type { Weather } from "../types/weather";

export const HomePage = () => {

    const { data, isError, isLoading } = useQuery({
        queryKey: ["weather"],
        queryFn: async () => {
            const res = await api.get<Weather>("/q=");
            return res.data
        },
        refetchOnWindowFocus: false,
        enabled: true,
        retry: 3,
        staleTime: 1000 * 60
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return <div>
        <div className="text-center font-bold font-mono my-5 text-4xl">Weather Application</div>

        <div>{data?.cloud}</div>
    </div>
}