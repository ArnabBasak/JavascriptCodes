<html>
<head>
<script type="text/javascript">
<!--
function WriteCookie()
{
 var now = new Date();
 now.setMonth( now.getMonth() + 1 );
 cookievalue = escape(document.myform.customer.value) + ";"
 document.cookie="name=" + cookievalue;
 document.cookie = "expires=" + now.toUTCString() + ";"
 document.write ("Setting Cookies : " + "name=" + cookievalue );
}
//-->
</script>
</head>
<body>
<form name="formname" action="">
Enter name: <input type="text" name="customer"/>
<input type="button" value="Set Cookie" onclick="WriteCookie()"/>
</form>
</body>
</html