var mysql = require('C:/Users/Arnab/node_modules/mysql')
var con = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'baban123',
    database: 'mydb',
});
con.connect(function(err){
    if (err) throw err;
    console.log('connected');
    var sql = 'create table customers(id int AUTO_INCREMENT PRIMARY KEY,name varchar(20),address varchar(20))';
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('table created');
    });
});