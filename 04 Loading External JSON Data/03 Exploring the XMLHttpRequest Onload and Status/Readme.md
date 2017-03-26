# Loading External JSON Data - Exploring the XMLHttpRequest Onload and Status

### Check the xhr.status

```javascript
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log("myStuff", myStuff);
    }
```

### Mention the response type

```javascript
xhr.responseType = 'text';
```
