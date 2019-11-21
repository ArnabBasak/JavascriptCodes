var mysql = require('C:/Users/Arnab/node_modules/mysql')
var con = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'baban123',
    database: 'mydb'
});
con.connect(function(err){
    if(err) throw err
    console.log('connected')
    //var sql = "insert into customers (name,address)values('Roshni','nagpur')";
   //inserting multiple records
   var sql = "insert into customers (name,address) values ?";
   var values = [
       ['Pranay','nagpur'],
       ['Tarun','Pune'],
       ['Mohit','Pune'],
       ['Baban','Hyderabad']
    ];
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("1 record inserted")
        //it will work only when one row is inserted
        console.log('the record id which is inserted' + result.insertId);
        console.log('Number of records affected' + result.affectedRows)
    });
});