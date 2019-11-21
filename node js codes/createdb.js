var mysql = require('C:/Users/Arnab/node_modules/mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'baban123'
});
con.connect(function(err){
if (err) throw err;
console.log('connected');
con.query("CREATE DATABASE mydb",function(err,result){
    if(err) throw err;
    console.log('database created')
});
});