<html>
<head>
<script type="text/javascript">
<!--
function ReadCookie()
{
 var allcookies = document.cookie;
 document.write ("All Cookies : " + allcookies );
Set
Cookie
Javascript
85
 // Get all the cookies pairs in an array
 cookiearray = allcookies.split(';');
 // Now take key value pair out of this array
 for(var i=0; i<cookiearray.length; i++){
 name = cookiearray[i].split('=')[0];
 value = cookiearray[i].split('=')[1];
 document.write ("Key is : " + name + " and Value is : " + value);
 }
}
//-->
</script>
</head>
<body>
<form name="myform" action="">
<p> click the following button and see the result:</p>
<input type="button" value="Get Cookie" onclick="ReadCookie()"/>
</form>
</body>
</html>