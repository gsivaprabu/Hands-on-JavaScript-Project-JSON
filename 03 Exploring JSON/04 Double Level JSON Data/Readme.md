# Exploring JSON - Double Level JSON Data

- Creating double level JSON

```javascript
var theData1 = '{"Name":{"firstName":"Pranav","lastName":"Sivaprabu"},"address":{"city":"chennai","zipcoe":636202}}';
```

Print the object

```javascript
document.getElementById('message').innerHTML = myObj.Name.firstName;
```