# Exploring JSON - Triple Level JSON Data


```javascript
var theData1 = '{"Name":{"firstName":"Pranav","lastName":"Sivaprabu"},"address":{"city":{"maincity":"chennai","taluk":"Attur"},"zipcoe":636202}}';
```



```javascript
document.getElementById('message').innerHTML = myObj.address.city.maincity;
```