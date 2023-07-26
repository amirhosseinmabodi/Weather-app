let searchBoxelm = document.querySelector(".search-box");
let cityName = document.querySelector(".city");
let cityTemp = document.querySelector(".temp");
let cityWeather = document.querySelector(".weather");
let cityHi_low_Temp = document.querySelector(".hi-low");
let cityDate = document.querySelector(".date");

searchBoxelm.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let query = searchBoxelm.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=81448382287848cf0a38173101e78749`
    )
      .then((result) => result.json())
      .then((data) => {
        cityName.innerHTML = `${data.name}, ${data.sys.country}`;
        cityDate.innerHTML = showdate()
        cityTemp.innerHTML = `${Math.floor(data.main.temp)}<span>°c</span>`;
        cityWeather.innerHTML = data.weather[0].main;
        cityHi_low_Temp.innerHTML = `${Math.floor(
          data.main.temp_min
        )}°c / ${Math.floor(data.main.temp_max)}°c`;
      })
      .catch(() => {
        cityName.innerHTML = "";
        cityDate.innerHTML = "";
        cityTemp.innerHTML = "404 Not Found"; 
        cityWeather.innerHTML= "";
        cityHi_low_Temp.innerHTML= "";
      });
  }
});

function showdate () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date()
    let nowDate = {
        Day : days[date.getDay()],
        Month : months[date.getMonth()],
        monthDate : date.getDate(),
        Year : date.getFullYear()
    }
     
    return `${nowDate.Day} ${nowDate.monthDate} ${nowDate.Month} ${nowDate.Year}`
}


