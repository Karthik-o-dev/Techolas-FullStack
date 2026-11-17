import { useQuery } from "@tanstack/react-query";
import type { Weather } from "../types/weather";
import { api } from "../lib/axios";
import { useState } from "react";

const [city, setCity] = useState("Kochi")

export const useWeatherQuery = useQuery({
    queryKey: ["weather", city],
    queryFn: async () => {
        const res = await api.get<Weather>("/current.json", {
            params: {
                key: import.meta.env.VITE_WEATHER_API_KEY,
                q: city
            }
        });
        return res.data
    },
    refetchOnWindowFocus: false,
    enabled: Boolean(city.trim()),
    retry: 3,
    staleTime: 1000 * 60
})