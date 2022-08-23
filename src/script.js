function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);

console.log(apiUrl)
}

let apiKey = "91976109f2a91771f09b69d01c0d52a3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);