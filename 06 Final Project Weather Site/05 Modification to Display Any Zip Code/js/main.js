/*jslint browser:true */
'use strict';
var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather() {
    var zip = document.getElementById('zip').value;
    if (zip === '') {zip= 84653}
    // GET THE CONDITIONS
    weatherConditions.open('GET', 'http://api.wunderground.com/api/3862281bac73c8d2/conditions/q/CA/' + zip + '.json', true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);

    // GET THE FORECARST
    weatherForecast.open('GET', 'http://api.wunderground.com/api/3862281bac73c8d2/forecast/q/CA/' + zip + '.json', true);
    weatherForecast.responseType = 'text';
    weatherForecast.send();

}


weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_c;
    } //end if
}; //end function



weatherForecast.onload = function() {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext;
        // Day 1
        document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday["1"].date.weekday;
        document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday["1"].high.celsius + "&#x2103;";
        document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday["1"].low.celsius + "&#x2103;";
        var imagePath = fObj.forecast.simpleforecast.forecastday["0"].icon_url;
        document.getElementById('r1c2').src = imagePath;


        // Day 2
        document.getElementById('r2c1').innerHTML = fObj.forecast.simpleforecast.forecastday["2"].date.weekday;
        document.getElementById('r2c3').innerHTML = fObj.forecast.simpleforecast.forecastday["2"].high.celsius + "&#x2103;";
        document.getElementById('r2c4').innerHTML = fObj.forecast.simpleforecast.forecastday["2"].low.celsius + "&#x2103;";
        var imagePath = fObj.forecast.simpleforecast.forecastday["0"].icon_url;
        document.getElementById('r2c2').src = imagePath;



        // Day 3
        document.getElementById('r3c1').innerHTML = fObj.forecast.simpleforecast.forecastday["3"].date.weekday;
        document.getElementById('r3c3').innerHTML = fObj.forecast.simpleforecast.forecastday["3"].high.celsius + "&#x2103;";
        document.getElementById('r3c4').innerHTML = fObj.forecast.simpleforecast.forecastday["3"].low.celsius + "&#x2103;";
        var imagePath = fObj.forecast.simpleforecast.forecastday["0"].icon_url;
        document.getElementById('r3c2').src = imagePath;

    } //end if
}; //end function

loadWeather() ;