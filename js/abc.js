const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

console.log(hourlyWeather[1])

hourlyWeather.forEach(hourlyForecast => {
    console.log(` At ${hourlyForecast.time} the temperature will be ${hourlyForecast.temperature}`)
})


for (let i = 0; i < hourlyWeather.lenght; i++) {
    console.log(hourlyWeather[i].temperature);
}
