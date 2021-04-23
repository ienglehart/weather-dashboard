var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#location");
var weatherContainerEl = document.querySelector('#print-here');

// function that begins API call when a location is submitted
var formSubmitHandler = function(event){
  console.log("click");
  event.preventDefault();
  var location = locationInputEl.value.trim();
  //displayWeather();
  //console.log(location);
  if (location){
    getWeather(location);
    //displayWeather(); //testing printing in elements
    locationInputEl.value = "";
  }else{
    alert("theres nothing here!");
  }
}

// Function to handle API call and begin the function to print recieved data
var getWeather = function(location) {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=339dea2bbca309f35c984f29f1697e78';
  
  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayWeather(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to find Weather");
    });
};

// Function to print weather data from api to existing html elements
var displayWeather = function(data) {

  var nameEl = document.getElementById("location-name");
  var nameData = data.name; // data passed in from api here
  nameEl.append = nameData;

  var tempEl = document.getElementById("location-temp");
  var tempData = "hi, this will be location"; // data passed in from api here
  tempEl.innerText = tempData;

  var weatherEl = document.getElementById("location-weather");
  var weatherData = "hi, this will be location"; // data passed in from api here
  weatherEl.innerText = weatherData;
};

userFormEl.addEventListener("submit", formSubmitHandler);
