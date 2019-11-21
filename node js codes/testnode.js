var http = require('http');
var datemodule = require('./myfirstmodule.js')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write("the current date and time is "+datemodule.myDateTime());
    res.end('Hello world');
}).listen(8081)