const express = require('express');
const mysql = require('mysql')
const app = express();

var connection = mysql.createConnection({
host : "localhost",
user :"root" ,
password : "password",
database : "myf_db",
port : "3306"
});
connection.connect ( (err) =>{
    if(err){
        throw err;
    }else
    console.log("connected")
}
);
connection.query(
    'INSERT into student values (6,"HoopName")',
    'selct* student',
    (err, data) => {
      if (err) throw err;
      else{
console.log( "Inerted sussfully! Congrataulation Ali ")
      }
}
);
// connection.query("decribe student");
// connection.query("CREATE TABLE customers (customer_id int auto_increment, name VARCHAR(255), address VARCHAR(255)", (err)=>{
//     if(err){
//         throw err;
//     }else
//     console.log("amazing")
// }
// );
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
const  port = process.env.PORT || 5000;
 
app.listen(port);
console.log("app = "+ port)