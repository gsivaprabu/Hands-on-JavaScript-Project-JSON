var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log("myStuff", myStuff);

        var myString = "";

        for (var i = 0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            var x = i + 1;
            myString += x + ". " + myStuff.presidents[i].first + "<br>";
        }

        document.getElementById('message').innerHTML = myString;
    }
}
