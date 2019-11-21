/* var http = require('http')
var fs = require('fs')
var formidable = require('c:/Users/Arnab/node_modules/formidable')
http.createServer(function (req,res){
if (req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var oldpath = files.filetoupload.path
        var newpath = 'c:/Users/Arnab/' + files.filetoupload.name;
        fs.rename(oldpath,newpath,function (err){
            if(err) throw err;
            res.write('file uploaded and moved');
            res.end();
        });
    });

} else{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<form action = "fileupload" method = "post" enctype="multipartform-data">');
    res.write('<input type = "file" name = "fileupload"><br>')
    res.write('<input type = "submit">');
    res.write('</form>')
    return res.end();

}
}).listen(8080) */
var http = require('http');
var formidable = require('C:/Users/Arnab/node_modules/formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Arnab/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
