# Fajax
JQuery plugin for ajaxifying forms with file support. It's wrapper of `$.ajax` function.

It's extra lightweight: just 345 bytes of minified version.

Let's try the [demo](https://cdn.rawgit.com/aziev/jquery.fajax/5113ae349863aea4d26d01ee741c6c75b620971b/demo/index.html).

## Installation

You can install it via npm:
```
npm install jquery.fajax
```
Or clone this repository:
```
git clone https://github.com/aziev/jquery.fajax
```
Or [download](https://github.com/aziev/jquery.fajax/archive/master.zip) it directly.

## Usage
Just write your form markup like usually:
```html
<form action="http://example.com/action.php" method="post">
    <input type="text" name="user">
    <input type="email" name="email">
    <input type="submit">
</form>
```
and then call the plugin:
```javascript
$('form').fajax({
    success: function(){
        alert('The form was successfully sent');
    },
});
```
That's all! It will send the form without page reloading and alert message on success.

## Parameters
Fajax has all parameters of [`$.ajax`](http://api.jquery.com/jquery.ajax/), except `url`, `type`, `data`, `processData` and `contentType`. You should set `url`, `type` and `data` in your markup.

It has one own parameter as well:
- **resetOnComplete** (boolean, default: true). Specifies clear or not form elements after upload.
