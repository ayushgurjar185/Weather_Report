// Get DOM elements
let searchInput = document.getElementById("searchInput");

let tempOutput = document.getElementById("temperature");
let humidityOutput = document.getElementById("humidity");
let windSpeedOutput = document.getElementById("windSpeed");
let descriptionOutput = document.getElementById("description");
let feelsLikeOutput = document.getElementById("feelsLike");
let cityNameOutput = document.getElementById("cityName");

let City1tempOutput = document.querySelector("#Mumbai h3");
let City1humidityOutput = document.querySelector("#Mumbai p:nth-child(2)");
let City1descriptionOutput = document.querySelector("#Mumbai p:nth-child(3)");
let City1feelsLikeOutput = document.querySelector("#Mumbai p:nth-child(1)");

let City2tempOutput = document.querySelector("#London h3");
let City2humidityOutput = document.querySelector("#London p:nth-child(2)");
let City2descriptionOutput = document.querySelector("#London p:nth-child(3)");
let City2feelsLikeOutput = document.querySelector("#London p:nth-child(1)");

let City3tempOutput = document.querySelector("#Tokyo h3");
let City3humidityOutput = document.querySelector("#Tokyo p:nth-child(2)");
let City3descriptionOutput = document.querySelector("#Tokyo p:nth-child(3)");
let City3feelsLikeOutput = document.querySelector("#Tokyo p:nth-child(1)");

// Search function when user types city name
function Search() {
    let cityName = searchInput.value.trim();
    if (cityName === '') {
        alert("Please enter a city name");
        return;
    }
    getWeather(cityName);
}

// Fetching weather data and updating the DOM
async function getWeather(cityName) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=23da294e0d206962aceb3fa4dd39ca00&units=metric`);
       
        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();
        let WeatherData = {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            feels_like: data.main.feels_like,
            wind: (data.wind.speed * 3.6).toFixed(2), // Converting m/s to km/h
            name: data.name
        };
        console.log(WeatherData);

        // Updating weather information in the DOM
        cityNameOutput.innerText = `City: ${WeatherData.name}`;
        tempOutput.innerText = `Temperature: ${WeatherData.temperature}°C`;
        humidityOutput.innerText = `Humidity: ${WeatherData.humidity}%`;
        descriptionOutput.innerText = `Description: ${WeatherData.description}`;
        feelsLikeOutput.innerText = `Feels Like: ${WeatherData.feels_like}°C`;
        windSpeedOutput.innerText = `Wind Speed: ${WeatherData.wind} km/h`;
    } catch (error) {
        console.error(error.message);
        alert("Unable to fetch weather data. Please try again.");
    }
}

// Preloading weather for predefined cities
async function preloadWeather(cityId, cityName) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=23da294e0d206962aceb3fa4dd39ca00&units=metric`);
       
        if (!response.ok) {
            throw new Error(`Unable to load data for ${cityName}`);
        }

        let data = await response.json();
        let WeatherData = {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            feels_like: data.main.feels_like
        };

        // Dynamically updating top cities weather data
        document.querySelector(`#${cityId} h3`).innerText = `Temperature: ${WeatherData.temperature}°C`;
        document.querySelector(`#${cityId} p:nth-child(2)`).innerText = `Humidity: ${WeatherData.humidity}%`;
        document.querySelector(`#${cityId} p:nth-child(3)`).innerText = `Description: ${WeatherData.description}`;
        document.querySelector(`#${cityId} p:nth-child(1)`).innerText = `Feels like: ${WeatherData.feels_like}°C`;
    } catch (error) {
        console.error(error.message);
    }
}

// Preload weather for predefined cities (Mumbai, London, Tokyo)
preloadWeather("Mumbai", "Mumbai");
preloadWeather("London", "London");
preloadWeather("Tokyo", "Tokyo");
