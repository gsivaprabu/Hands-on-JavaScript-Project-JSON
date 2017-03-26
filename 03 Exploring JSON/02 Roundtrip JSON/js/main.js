// JavaScript Document
var start = '{ "favColor": "Orange","favSeason":"Fall" }';
console.log("start", start);
var myObject = JSON.parse(start);
console.log("myObject", myObject);
var myString = JSON.stringify(myObject);
console.log("myString", myString);