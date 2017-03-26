# Loading External JSON Data - Overview

- Static Content
- Dynamic content
- JavaScript Engines
- AJAX
- XML Http Request
- AJAX in Action

- **A**synchronous **J**avaScript **A**nd **X**ML
- AJAX using => XML/JSON
- Now AJAX mostly prefer JSON Data.
- XMLHttpRequest() core AJAX concept.

- Create an instance


### Sample XMLHttpRequest


```javascript
var myReq = new XMLHttpRequest();
myReq.open('GET','data.json','true');
myReq.onload = function(){
	var cup = JSON.parse(myReq.responseText);
	console.log(cup);
}
myReq.send();
```
