# Exploring JSON - Roundtrip JSON

- Created the Object

```javascript
var start = '{ "favColor": "Orange","favSeason":"Fall" }';
```

## JSON.parse(myObject)

- Convert the Object to JSON

```javascript
var myObject = JSON.parse(start);
```

## JSON.stringify(myObject)

- Convert JSON to String
```javascript
var myString = JSON.stringify(myObject);
```