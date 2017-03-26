var theData1 = '{"Name":{"firstName":"Pranav","lastName":"Sivaprabu"},"address":{"city":"chennai","zipcoe":636202}}';
var myObj = JSON.parse(theData1);
console.log("myObj", myObj);

document.getElementById('message').innerHTML = myObj.Name.firstName;
