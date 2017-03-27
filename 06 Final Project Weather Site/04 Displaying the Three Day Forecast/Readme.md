# Final Project Weather Site - Displaying the Three Day Forecast

- Grabbing the JSON sucss data values and populated using document.getElementById

- FYI

```javascript
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
```