// Select the elements where the information will be displayed
const brazilInfo = document.getElementById("brazilinfo");
const capitalInfo = document.getElementById("capitalinfo");

// Display the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Display the last modified date in the footer
document.getElementById("lastModified").textContent += document.lastModified;

// URL for the API to fetch data about Brazil
const countryUrl = "https://restcountries.com/v3.1/name/brazil";

// Function to fetch country data
function fetchCountryData() {
  fetch(countryUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const country = data[0];
      const countryData = `<br><br><br>
        <strong>Capital:</strong> ${country.capital[0]} <br><br>
        <strong>Population:</strong> ${country.population.toLocaleString()} <br><br>
        <strong>Region:</strong> ${country.region} <br><br>
        <strong>Language: </strong> ${Object.values(country.languages).join(", ")}
      `;
      brazilInfo.innerHTML = countryData;
    })
    .catch(error => console.error("Error fetching country data:", error));
}

// API URL for fetching weather data in Brasília
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-15.7801&longitude=-47.9292&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

// Function to fetch weather data
function fetchWeatherData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const currentWeather = data.current;
      const hourlyWeather = data.hourly;

      const tempInCelsius = currentWeather.temperature_2m;
      const tempInFahrenheit = (tempInCelsius * 9/5) + 32;
      const windSpeedKmh = (currentWeather.wind_speed_10m * 3.6).toFixed(1); 
      const windSpeedMph = (currentWeather.wind_speed_10m * 2.23694).toFixed(2);



      // Display current weather
      const weatherData = `<br><br><br>
        <strong>Current Temperature:</strong> ${tempInCelsius}°C -- ${tempInFahrenheit.toFixed(2)}°F <br><br>
        <strong>Wind Speed:</strong> ${windSpeedKmh} Km/h -- ${windSpeedMph} mph<br> 
      `;

      capitalInfo.innerHTML = weatherData;
    })
    .catch(error => console.error("Error fetching weather data:", error));
}

// Call the function to fetch weather data when the page loads
fetchWeatherData();

// Call the function to fetch country data when the page loads
fetchCountryData();
