const apiKey = "57175bfdf85a4f7547b04d89a479116d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#btn");
const err = document.querySelector("#error");
const deg = document.querySelector("#deg");
const local = document.querySelector("#Location");
const humSpeed = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#hum");
const humClass = document.querySelector(".humidity");
const windClass = document.querySelector(".wind");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
  if (response.status == 404) {
    err.style.display = "block";
    setTimeout(() => {
      err.style.display = "none";
    }, 3000);
  } else {
    let weatherData = await response.json();

    local.innerHTML = weatherData.name;
    deg.innerHTML = Math.round(weatherData.main.temp) + "°C";
    // humSpeed.innerHTML = weatherData.main.humidity;
    humClass.innerHTML = `   <div class="humidity">
            <span id="count humidity">${weatherData.main.humidity}%</span>
            <span id="hum">Humidity</span>
          </div>`;
    windClass.innerHTML = ` <div class="wind">
            <span id="count windSpeed">${weatherData.wind.speed}m/s</span>
            <span id="wind">Wind Speed</span>
          </div>`;
  }
};


searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "Return") {
    checkWeather(searchInput.value);
    searchInput.value = "";
  }
});


searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value = "";
});



// git branch
// git checkout
// git pull
