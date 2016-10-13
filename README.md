# Fajax
Extra lightweight jQuery plugin for ajaxifying forms with file support. It's wrapper of $.ajax function.

## Usage
Just write your form markup like usually:
```
<form action="http://example.com/action.php" method="post">
    <input type="text" name="user">
    <input type="email" name="email">
    <input type="submit">
</form>
```
and then call the plugin:
```
$('form').fajax({
    success: function(){
        alert('The form was successfully sent');
    },
});
```
That's all! It will send the form without page reloading and alert message on success.
