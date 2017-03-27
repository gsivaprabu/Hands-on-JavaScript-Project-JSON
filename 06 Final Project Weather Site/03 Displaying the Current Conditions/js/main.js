/*jslint browser:true */
'use strict';
var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;
// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.wunderground.com/api/3862281bac73c8d2/conditions/q/CA/84653.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);
weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_c;
    } //end if
}; //end function


// GET THE FORECARST
weatherForecast.open('GET', 'http://api.wunderground.com/api/3862281bac73c8d2/forecast/q/CA/84653.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();
weatherForecast.onload = function() {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast;

    } //end if
}; //end function
