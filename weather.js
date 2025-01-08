const apikey = "dae1cba175c5f524d879a4259aaf1bb2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check delivery status
function checkDeliveryStatus(temp, windSpeed) 
{
    const deliveryStatus = document.querySelector(".delivery-status");
    // Evaluate conditions for delayed delivery
    if (temp < 5 && windSpeed > 30) {
        deliveryStatus.innerHTML = "Delivery will be delayed due to severe weather conditions.";
        deliveryStatus.style.color = "red";
    } else {
        deliveryStatus.innerHTML = "Delivery is on time.";
        deliveryStatus.style.color = "green";
    }
}

async function checkWeather(city) {
    try {
        // Fetch weather data from the API
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("City not found or invalid API key");
        }
        const data = await response.json();

        // Update the DOM with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        // Convert wind speed to km/h and display it
        const windSpeedKmH = (data.wind.speed * 3.6).toFixed(2); // Convert m/s to km/h
        document.querySelector(".windspeed").innerHTML = windSpeedKmH + " Km/h";

        // Check delivery status based on weather
        checkDeliveryStatus(data.main.temp, windSpeedKmH);

        // Update weather icon based on condition
        const weatherCondition = data.weather[0].main.toLowerCase();
        switch (weatherCondition) {
            case "clouds":
                weatherIcon.src = "clouds.png";
                break;
            case "clear":
                weatherIcon.src = "clear.png";
                break;
            case "rain":
                weatherIcon.src = "rain.png";
                break;
            case "mist":
                weatherIcon.src = "mist.png";
                break;
            default:
                weatherIcon.src = "clear.png"; // Fallback icon
                break;
        }
    } catch (error) {
        console.error(error.message);
        alert("Failed to fetch weather data. Please check the city name or API key.");
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
