import React, { useState } from "react";
import { useForcastQuery, useWeatherQuery } from "../hooks/reactQuery";

export const HomePage = () => {

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("Kochi")

    const { data, isError, isLoading } = useWeatherQuery(city);
    const { data: forcastData } = useForcastQuery(city);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!search.trim()) return;

        setCity(search.trim());
    }

    if (isLoading) {
        return <div className="text-4xl md:text-5xl font-bold  text-center">Loading</div>
    }

    if (isError) {
        return <div className="text-4xl md:text-5xl font-bold text-center">Error</div>
    }

    return <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col items-center px-4 py-12">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
                Weather App
            </h1>
            <p className="text-blue-100 mt-2">
                Check the weather anywhere in the world
            </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md mb-8">
            <input type="text" placeholder="Search city..." className="flex-1 min-w-0 px-5 py-3 rounded-xl bg-white/95 outline-none focus:ring-2 focus:ring-blue-300 shadow-lg" value={search} onChange={(e) => setSearch(e.target.value)} />

            <button type="submit" className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition shadow-lg">Search</button>
        </form>

        <div className="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl text-white">
            <div className="text-center">
                <h2 className="text-2xl font-bold">
                    {data?.location.name}
                </h2>

                <p className="text-blue-100">
                    {data?.location.country}
                </p>
            </div>

            <div className="flex flex-col items-center my-6">
                <img
                    src={data?.current.condition.icon}
                    alt={data?.current.condition.text}
                    className="w-24 h-24"
                />

                <h1 className="text-7xl font-bold tracking-tight">{data?.current.temp_c}°C</h1>
                <p className="text-xl mt-2 text-blue-100">{data?.current.condition.text}</p>
                <p className="text-sm text-blue-100 mt-1">Feels like {data?.current.feelslike_c}°C</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/15 rounded-2xl p-4">
                    <p className="text-sm text-blue-100">Humidity</p>
                    <p className="text-2xl font-bold mt-1">
                        {data?.current.humidity}%
                    </p>
                </div>

                <div className="bg-white/15 rounded-2xl p-4">
                    <p className="text-sm text-blue-100">Wind Speed</p>
                    <p className="text-2xl font-bold mt-1">
                        {data?.current.wind_kph} km/h
                    </p>
                </div>

                <div className="bg-white/15 rounded-2xl p-4">
                    <p className="text-sm text-blue-100">Cloud Cover</p>
                    <p className="text-2xl font-bold mt-1">
                        {data?.current.cloud}%
                    </p>
                </div>

                <div className="bg-white/15 rounded-2xl p-4">
                    <p className="text-sm text-blue-100">UV Index</p>
                    <p className="text-2xl font-bold mt-1">
                        {data?.current.uv}
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-5">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 text-center">Forcast</h1>

            <div className="w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                <div className="grid grid-cols-7 gap-4">
                    {forcastData?.forecast.forecastday.map((day) => (
                        <div key={day.date} className="bg-white/15 rounded-2xl p-4">
                            <p>{day.date}</p>
                            <p>{day.day.maxtemp_c}°C</p>
                            <p>{day.day.mintemp_c}°C</p>
                            <img
                                src={`https:${day.day.condition.icon}`}
                                alt={day.day.condition.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}