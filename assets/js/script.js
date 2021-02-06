var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#location");
var weatherContainerEl = document.querySelector('#print-here');

var formSubmitHandler = function(event){
  console.log("click");
  event.preventDefault();
  var location = locationInputEl.value;

  if (location){
    getWeather(location);

    locationInputEl.value = "";
  }else{
    alert("theres nothing here!");
  }
}

var getWeather = function() {
  // format the github api url
  var location = locationInputEl;
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+{location}+'&appid=339dea2bbca309f35c984f29f1697e78';
  
  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayWeather(data, searchTerm);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to find Weather");
    });
};

var displayWeather = function(data, searchTerm) {
  weatherContainerEl.appendChild(data)
};

userFormEl.addEventListener("submit", formSubmitHandler);
