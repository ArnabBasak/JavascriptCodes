<html>
<body>
<script type="text/javascript">
<!--
document.write("Entering the loop!<br /> ");
outerloop: // This is the label name
for (var i = 0; i < 5; i++)
{
 document.write("Outerloop: " + i + "<br />");
 innerloop:
 for (var j = 0; j < 5; j++)
 {
 if (j > 3 ) break ; // Quit the innermost loop
 if (i == 2) break innerloop; // Do the same thing
 if (i == 4) break outerloop; // Quit the outer loop
 document.write("Innerloop: " + j + " <br />");
 }
}
document.write("Exiting the loop!<br /> ");
//-->
</script>
</body>
</html>