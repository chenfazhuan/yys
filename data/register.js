const pool=require('./pool');
const qs=require('querystring');
module.exports=({
    add:(req,res)=>{
        "use strict";
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                conn.query("INSERT INTO yys_r VALUES(null,?,?,?)",[obj.uname,obj.upwd,obj.phone],(err,result)=>{
                    res.send('1');
                })
            })
        })
    }
})