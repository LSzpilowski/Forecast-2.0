
//Challenge 1 + Challenge 5 - Change name of the city after typing in form box + use that data for next steps e.g. change temp etc.

function changeCity(event) {
  event.preventDefault();
  let typedCity = document.querySelector("#typed-city");
  let city = document.querySelector("#middle-one-city");
  if (typedCity.value) {
    city.innerHTML = typedCity.value;
  } else {
  city.innerHTML = "Type City"
  }

  let apiKey = `40fe6b5at4b35a738783f3e891e2281o`;
 
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${typedCity.value}&key=${apiKey}`;
  axios.get(apiUrl).then(displayData);
}

function displayData(response) {
    let temperature = response.data.temperature.current;
    let roundedTemp = Math.round(temperature);
    let changeTemp = document.querySelector(".temperature");
    changeTemp.innerHTML = `${roundedTemp}`;

    let humidity = response.data.temperature.humidity;
    let changeHumidity = document.querySelector("#humidity");
    changeHumidity.innerHTML = `${humidity}`

    let wind = response.data.wind.speed;
    let changeWind = document.querySelector("#wind");
    let roundedWind = Math.round(wind);
    changeWind.innerHTML = `${roundedWind}`;

    let pressure = response.data.temperature.pressure;
    let changePressure = document.querySelector("#change-pressure");
    changePressure.innerHTML = `${pressure}`;

    let mainEmoji = document.querySelector("#main-emoji");
let weatherIcon = response.data.condition.icon_url;
mainEmoji.setAttribute("src", `${weatherIcon}`);

formateDate();
getForecast(response.data.coordinates);


  }

let formFormat = document.querySelector(".form-format");
formFormat.addEventListener("submit", changeCity);


function formatDay (timestamp) {
  let date = new Date (timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];

  return days[day];
}





function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");


  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
    forecastHTML = forecastHTML +
    `<div class="col-2">
            <div class="weather-forecast-date">${formatDay(forecastDay.time)}</div>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastDay.condition.icon}.png" width="100">
            <div class="weather-forecast-temp">
              <span id="max-temp">${Math.round(forecastDay.temperature.maximum)}°</span>
            <span id="min-temp">${Math.round(forecastDay.temperature.minimum)}°</span>
            </div>
          </div>
          `;
    }
  });


  forecastHTML = forecastHTML + `<div>`;
  forecastElement.innerHTML = forecastHTML;
}


function getForecast(coordinates) {
let latitude = coordinates.latitude;
let longitude = coordinates.longitude;

let apiKey = `40fe6b5at4b35a738783f3e891e2281o`;
                      
let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios(apiUrlForecast).then(displayForecast);
}














//Challenge 3 - Change day and time to current (it has to work every time after reloading)

function formateDate() {
let now = new Date();
let currentYear = now.getFullYear();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let curentDay = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let dateBox = document.querySelector(".current-date");
let dayBox = document.querySelector(".current-day");
let hourBox = document.querySelector(".current-hour");

dateBox.innerHTML = `${currentDate} ${currentMonth} ${currentYear}`;
dayBox.innerHTML = `${curentDay}`;
hourBox.innerHTML = `${currentHour}:${currentMinutes}`;
}



//Challenge 4 - How to get current location
    function changeData(response) {
    let cityName = response.data.city;
    let city = document.querySelector("#middle-one-city");
    city.innerHTML = `${cityName}`;

    let temperature = response.data.temperature.current;
    let roundedTemp = Math.round(temperature);
    let changeTemp = document.querySelector(".temperature");
    changeTemp.innerHTML = `${roundedTemp}`;

    let humidity = response.data.temperature.humidity;
    let changeHumidity = document.querySelector("#humidity");
    changeHumidity.innerHTML = `${humidity}`;

    let wind = response.data.wind.speed;
    let changeWind = document.querySelector("#wind");
    let roundedWind = Math.round(wind);
    changeWind.innerHTML = `${roundedWind}`;

    let pressure = response.data.temperature.pressure;
    let changePressure = document.querySelector("#change-pressure");
    changePressure.innerHTML = `${pressure}`;

let mainEmoji = document.querySelector("#main-emoji");
let weatherIcon = response.data.condition.icon;
mainEmoji.setAttribute("src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIcon}.png`);

formateDate();
getForecast(response.data.coordinates);

// getForecast(response.data)

    }

function showLocation() {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

      function showPosition(position) {
        let apiKey = `40fe6b5at4b35a738783f3e891e2281o`;
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(changeData);
      }

let locationButton = document.querySelector("#use-current-location");
locationButton.addEventListener("click", showLocation);

formateDate();

