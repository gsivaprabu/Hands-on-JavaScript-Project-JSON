# Final Project Weather Site - Displaying the Current Conditions

- Calling the API with correct **API KEY**
- After success populated the data.
- Below code for overwrite the data

```javascript
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
```

