const apiKey = "bef63a4620e5dbc0cecbc4cf042a7bbe";
const difKelvin = 273.15;
const container = document.getElementById("contenedor");
const weatherBox = document.querySelector("weather-box");
const weaterDetails = document.querySelector("weather-details");
const searchButton = document.getElementById("botonBusqueda");

searchButton.addEventListener("click", () => {
  const city = document.getElementById("ciudadEntrada").value;
  if (city) {
    fetchDatosClima(city);
  }
});

function fetchDatosClima(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span" );

  switch (data.weather[0].main) {
    case "Clear":
      image.src = "images/clear.png";
      break;
    case "Rain":
      image.src = "images/rain.png";
      break;
    case "Cloud":
      image.src = "images/cloud.png";
      break;
    case "Snow":
      image.src = "images/snow.png";
      break;
    case "Mist":
      image.src = "images/mist.png";
      break;
    case "Haze":
      image.src = "images/mist.png";
      break;

    default:
      image.src = "images/cloud.png";
      break;
  }

  const t = parseInt(Math.floor((data.main.temp)-difKelvin))
  const condition = data.weather[0].main;
  const windSpeed = parseInt(data.wind.speed)
  const humity = data.main.humidity;
  const descr = data.weather[0].description;

  
temperature.innerHTML=`${t}<span>°C</span>`;
description.innerHTML = descr;
humidity.innerHTML = `${humity}%`;
wind.innerHTML =  `${windSpeed}Km/h`;

}