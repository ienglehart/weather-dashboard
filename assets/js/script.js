var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#location");
var weatherContainerEl = document.querySelector('#print-here');
var nameEl = document.querySelector('#w-title');
var tempEl = document.querySelector('#w-temp');
var weatherEl = document.querySelector('#w-weather');
var feelsLikeEl = document.querySelector('#w-feels');

// function that begins API call when a location is submitted
var formSubmitHandler = function(event){
  event.preventDefault();
  var location = locationInputEl.value.trim();
  if (location){
    getWeather(location);
    locationInputEl.value = "";
  }else{
    alert("theres nothing here!");
  }
}

// Function to handle API call and begin the function to print recieved data
var getWeather = function(location) {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&units=imperial&appid=339dea2bbca309f35c984f29f1697e78';
  
  // make a get request to url
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
};

// Function to print weather data from api to existing html elements
function appendData(data) {

  console.log(data);

  // Take data from openweather api and store it in variables
  var name = data['name'];
  var weather = data['weather'][0]['main'];
  var temp = data['main']['temp'];
  var feels = data['main']['feels_like'];

  //print data stored in variables into html for display
  nameEl.innerHTML = "Weather in: " + name;
  tempEl.innerHTML = "Temp is: " + temp;
  weatherEl.innerHTML = "Todays Weather is: " + weather;
  feelsLikeEl.innerHTML = "Today's Temp feels like: " + feels;
};

userFormEl.addEventListener("submit", formSubmitHandler);
