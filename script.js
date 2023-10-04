let apiKey = "bef63a4620e5dbc0cecbc4cf042a7bbe";
const difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
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
  const divdatosClima = document.getElementById("datosClima");
  divdatosClima.innerHTML = "";
  const cityName = data.name;
  const temperature = data.main.temp;
  const condition = data.weather[0].main;
  const humity = data.main.humidity;
  const icon = data.weather[0].icon;

  const cityTitle = document.createElement("h2");
  cityTitle.textContent = cityName;

  const tempTitle = document.createElement("p");
  tempTitle.textContent = `la temperatura es de ${Math.floor(
    temperature - difKelvin
  )} °C`;

  const humityTitle = document.createElement("p");
  cityTitle.textContent = `La humedad es de ${humity} %`;

  const iconInfo = document.createElement("img");
  iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;

  const conditionTitle = document.createElement("p");
  conditionTitle.textContent = `Las condiciones climatologicas son ${condition}`;

  divdatosClima.appendChild(cityTitle);
  divdatosClima.appendChild(tempTitle);
  divdatosClima.appendChild(humityTitle)
  divdatosClima.appendChild(conditionTitle);
  divdatosClima.appendChild(iconInfo)
}
