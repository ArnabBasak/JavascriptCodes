var mysql = require('C:/Users/Arnab/node_modules/mysql')
var con = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'baban123',
    database:'mydb'
})
con.connect(function(err){
    if(err) throw err; 
    console.log('connected')
    //con.query('select * from customers',function(err,result,feilds)
    //where
    con.query('select * from customers where address = "pune"',function(err,result)
    {
        if(err) throw err;
        console.log(result)
        //console.log(feilds)
        //console.log(feilds[2].name)
    });
});