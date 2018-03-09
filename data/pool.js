const mysql=require('mysql');
var pool=mysql.createPool({
    user:'root',
    password:'',
    database:'yys',
    connectionLimit:5
})
module.exports=pool;