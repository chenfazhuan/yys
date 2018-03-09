const http=require('http');
const express=require('express');
const register=require("./register");
var app=express();
var server=http.createServer(app).listen(8080);

app.use(express.static('../../yys'));
app.post('/register',register.add);
