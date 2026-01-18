// Replace with your OpenWeatherMap API key
const API_KEY = "ca90f91d1e4e48a2bf5125532251409";

// Select DOM elements
const form = document.querySelector("#weatherForm");
const input = document.querySelector("#cityInput");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form refresh
    const city = input.value.trim();
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        // Build API URL
        const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric;
//  http://api.weatherapi.com/v1/current.json?key=ca90f91d1e4e48a2bf5125532251409&q=San Francisco&aqi=no 


        // Fetch weather
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        // Extract data
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        const location = data.name;
        const country = data.sys.country;

        // Update UI
        result.innerHTML = `
            <h2>${location}, ${country}</h2>
            <p>🌡 Temperature: ${temp} °C</p>
            <p>🌤 Condition: ${condition}</p>
        `;
    } catch (error) {
        result.innerHTML = <p style="color:red;">${error.message}</p>;
    }
}