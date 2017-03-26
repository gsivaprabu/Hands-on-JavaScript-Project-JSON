var theData1 = '{"firstName":"Pranav","lastname":"Sivaprabu","city":"Rasipuram"}';
var myobj = JSON.parse(theData1);
console.log("myobj", myobj);

document.getElementById('message').innerHTML = myobj.firstName;