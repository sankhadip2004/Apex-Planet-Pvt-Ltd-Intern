const apiKey = "2a36b13e8875cff623f85e7514bf6475";
const weatherdataEle = document.querySelector(".weather-data"); // must have dot for class
const citynameEle = document.querySelector("#city--name");
const formEle = document.querySelector("form");
const iconContainer = document.querySelector(".icon");

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityvalue = citynameEle.value.trim();
  if (cityvalue !== "") {
    getWeatherData(cityvalue);
  } else {
    alert("Please enter a city name!");
  }
});

async function getWeatherData(cityvalue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();

    // extract weather info
    const temperature = Math.floor(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const feelsLike = Math.floor(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // update UI
    weatherdataEle.querySelector(".Temp").textContent = `${temperature}°C`;
    weatherdataEle.querySelector(".desc").textContent = description;

    iconContainer.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;

    const detailsDiv = weatherdataEle.querySelector(".details");
    detailsDiv.innerHTML = `
      <div>Feels Like: ${feelsLike}°C</div>
      <div>Humidity: ${humidity}%</div>
      <div>Wind Speed: ${windSpeed} m/s</div>
    `;
  } catch (err) {
    console.error(err);
    weatherdataEle.querySelector(".Temp").textContent = "City not found!";
    weatherdataEle.querySelector(".desc").textContent = "";
    iconContainer.innerHTML = "";
    weatherdataEle.querySelector(".details").innerHTML = "";
  }
}