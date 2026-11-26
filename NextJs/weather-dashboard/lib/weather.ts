export const WeatherApi = async (city: string) => {
    const key = process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
    const data = await response.json();
    return data;
}