var http = require('http');
//create server
var url = require('url');

http.createServer(function(req,res){
res.write(req.url);//pass the query string
//to spilt the query string
var q = url.parse(req.url,true).query;
var txt = q.year + " " +q.month;
res.end(txt)
//res.end();
}).listen(8080)