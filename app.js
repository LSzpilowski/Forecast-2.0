
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

  let apiKey = `6c67dd4f6367691a6d362d7c08b9b5e5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${typedCity.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayData);
}

function formatLocalDate() {
  let date = new Date();
  let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
return `${hour}:${minutes}`;
}

function displayData(response) {
    console.log(response);
    let temperature = response.data.main.temp;
    let roundedTemp = Math.round(temperature);
    let changeTemp = document.querySelector(".temperature");
    changeTemp.innerHTML = `${roundedTemp}`;

    let humidity = response.data.main.humidity;
    let changeHumidity = document.querySelector("#humidity");
    changeHumidity.innerHTML = `${humidity}`

    let wind = response.data.wind.speed;
    let changeWind = document.querySelector("#wind");
    let roundedWind = Math.round(wind);
    changeWind.innerHTML = `${roundedWind}`;

    let pressure = response.data.main.pressure;
    let changePressure = document.querySelector("#change-pressure");
    changePressure.innerHTML = `${pressure}`;

    let mainEmoji = document.querySelector("#main-emoji");
let weatherIcon = response.data.weather[0].icon;
mainEmoji.setAttribute("src", `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);

let localTimeElement = document.querySelector("#local-time");
localTimeElement.innerHTML = formatLocalDate(response.data.dt * 1000);
  }

let formFormat = document.querySelector(".form-format");
formFormat.addEventListener("submit", changeCity);



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

formateDate();

//Challenge 4 - How to get current location
    function changeData(response) {
      console.log(response);
    let cityName = response.data.name;
    let city = document.querySelector("#middle-one-city");
    city.innerHTML = `${cityName}`;

    let temperature = response.data.main.temp;
    let roundedTemp = Math.round(temperature);
    let changeTemp = document.querySelector(".temperature");
    changeTemp.innerHTML = `${roundedTemp}`;

    let humidity = response.data.main.humidity;
    let changeHumidity = document.querySelector("#humidity");
    changeHumidity.innerHTML = `${humidity}`;

    let wind = response.data.wind.speed;
    let changeWind = document.querySelector("#wind");
    let roundedWind = Math.round(wind);
    changeWind.innerHTML = `${roundedWind}`;

    let pressure = response.data.main.pressure;
    let changePressure = document.querySelector("#change-pressure");
    changePressure.innerHTML = `${pressure}`;

let mainEmoji = document.querySelector("#main-emoji");
let weatherIcon = response.data.weather[0].icon;
mainEmoji.setAttribute("src", `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);

    }

function showLocation() {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

      function showPosition(position) {
        console.log(position);
        let apiKey = `6c67dd4f6367691a6d362d7c08b9b5e5`;
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
                          
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(changeData);
      }

let locationButton = document.querySelector("#use-current-location");
locationButton.addEventListener("click", showLocation);





//       function convertToFarenheit(event) {
//   event.preventDefault();
//   let celciusTemperature = response.data.main.temp;
//   celciusTemp.classList.remove("active");
//   farenheitTemp.classList.add("active");
//   let temperatureElement = document.querySelector(".temperature");
//   let farenheitTemperature = (celciusTemperature * 9) / 5 + 32;
//   temperatureElement.innerHTML = Math.round(farenheitTemperature);

//   let forecastMaxTempElement = document.querySelector(`#forecastMaxTemp`);
//   let forecastMinTempElement = document.querySelector(`#forecastMinTemp`);
//   console.log(forecastMaxTempElement);
// }

// function convertToCelcius(event) {
//   event.preventDefault();
  
// let celciusTemperature = response.data.main.temp;
//   celciusTemp.classList.add("active");
//   farenheitTemp.classList.remove("active");
//   let temperatureElement = document.querySelector(".temperature");
//   temperatureElement.innerHTML = Math.round(celciusTemperature);
// }

// let farenheitTemp = document.querySelector(`#farenheit-temp`);
// farenheitTemp.addEventListener("click", convertToFarenheit);

// let celciusTemp = document.querySelector("#celcius-temp");
// celciusTemp.addEventListener("click", convertToCelcius);
//     }
// Od Zuzanki


// function search(event) {
//   event.preventDefault();
//   let enteredCity = document.querySelector("#searched-city");
//   let newCity = enteredCity.value;
//   let newCitySmall = newCity.toLowerCase();
//   let newCityFinal = newCitySmall[0].toUpperCase() + newCitySmall.substring(1);
//   //newCity is entered and i want to replace #typed-city with newCity
//   let defaultCity = document.querySelector("#default-city");
//   defaultCity.innerHTML = newCityFinal;

//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCityFinal}&appid=6c67dd4f6367691a6d362d7c08b9b5e5&units=metric`;

//   function showData(response) {
//     let temp = response.data.main.temp;
//     let temperature = Math.round(temp);
//     let temperatureElement = document.querySelector(`.temperature`);
//     temperatureElement.innerHTML = temperature;

//     celciusTemperature = Math.round(temp);

//     let description = response.data.weather[0].main;
//     let descriptionElement = document.querySelector(`#description`);
//     descriptionElement.innerHTML = description;

//     let pressure = response.data.main.pressure;
//     let pressureElement = document.querySelector(`#pressure`);
//     pressureElement.innerHTML = pressure;

//     let humidity = response.data.main.humidity;
//     let humidityElement = document.querySelector(`#humidity`);
//     humidityElement.innerHTML = humidity;

//     let wind = response.data.wind.speed;
//     let windElement = document.querySelector(`#wind`);
//     windElement.innerHTML = wind;

//     let icon = response.data.weather[0].icon;
//     let emojiElement = document.querySelector(`#main-emoji`);
//     emojiElement.setAttribute(
//       "src",
//       `http://openweathermap.org/img/wn/${icon}@2x.png`
//     );
//     getCoordinates(response.data.coord);
//   }

//   axios.get(apiUrl).then(showData);
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

/////////////////////////////////////

// let now = new Date();

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednsday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = days[now.getDay()];

// let hours = now.getHours();
// let minutes = now.getMinutes();

// if (minutes < 10) {
//   minutes = "0" + minutes;
// }

// let time = `${day}, ${hours}:${minutes}`;

// let date = document.querySelector("#date");
// date.innerHTML = time;

////////////////////////////////////////////////

// function accessLocation() {
//   navigator.geolocation.getCurrentPosition(getLocation);
//   function getLocation(location) {
//     let lat = location.coords.latitude;
//     let lon = location.coords.longitude;

//     let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c67dd4f6367691a6d362d7c08b9b5e5&units=metric`;

//     axios.get(apiUrlCurrent).then(showCurrentData);

//     function showCurrentData(response) {
//       let currentCity = response.data.name;
//       let cityElement = document.querySelector(`#default-city`);
//       cityElement.innerHTML = currentCity;

//       let temp = response.data.main.temp;
//       let temperature = Math.round(temp);
//       let temperatureElement = document.querySelector(`.temperature`);
//       temperatureElement.innerHTML = temperature;

//       celciusTemperature = Math.round(temp);

//       let description = response.data.weather[0].main;
//       let descriptionElement = document.querySelector(`#description`);
//       descriptionElement.innerHTML = description;

//       let pressure = response.data.main.pressure;
//       let pressureElement = document.querySelector(`#pressure`);
//       pressureElement.innerHTML = pressure;

//       let humidity = response.data.main.humidity;
//       let humidityElement = document.querySelector(`#humidity`);
//       humidityElement.innerHTML = humidity;

//       let wind = response.data.wind.speed;
//       let windElement = document.querySelector(`#wind`);
//       windElement.innerHTML = wind;
//       let icon = response.data.weather[0].icon;
//       let emojiElement = document.querySelector(`#main-emoji`);
//       emojiElement.setAttribute(
//         "src",
//         `http://openweathermap.org/img/wn/${icon}@2x.png`
//       );

//       getCoordinates(response.data.coord);
//     }
//   }
// }

// let button = document.querySelector(`#button`);
// button.addEventListener("click", accessLocation);

/// units conversion









// let weather = [
//   {
//   city: "paris",
//   temp: 19.7,
//   humidity: 80,
//   },
//   {
//   city:"tokyo",
//   temp: 17.3,
//   humidity: 50
//   },
// {
// city: "lisbon",
// temp: 30.2,
// humidity: 20,
// },
// {
// city: "san francisco",
//   temp: 20.9,
// humidity: 100,
// },
// { 
// city: "oslo",
// temp: -5,
// humidity: 20,
// },
// ]

// function findCityWeather() {
// let whichCity = prompt("Which city do you want to check?");
// whichCity=whichCity.toLowerCase();
// if (whichCity === weather[0].city) {
//   alert(`It is currently ${weather[0].temp}°C in ${weather[0].city} with a humidity ${weather[0].humidity}%.`)
// } else if (whichCity === weather[1].city) {
//   alert(`It is currently ${weather[1].temp}°C in ${weather[1].city} with a humidity ${weather[1].humidity}%.`)
// } else if (whichCity === weather[2].city) {
//   alert(`It is currently ${weather[2].temp}°C in ${weather[2].city} with a humidity ${weather[2].humidity}%.`)
// }
// else if (whichCity === weather[3].city) {
//   alert(`It is currently ${weather[3].temp}°C in ${weather[3].city} with a humidity ${weather[3].humidity}%.`)
// }else if (whichCity === weather[4].city) {
//   alert(`It is currently ${weather[4].temp}°C in ${weather[4].city} with a humidity ${weather[4].humidity}%.`)
// } else {
//   alert ("Sorry, we don't know weather for your city yet");
// }
// }


// let findWeather = document.querySelector(".top-one-size-button");
// findWeather.addEventListener("click", findCityWeather);
