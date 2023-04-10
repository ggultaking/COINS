const express = require('express');
const mysql = require('mysql');
const app = express()
const connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'Gulu19961211',
database:'coins'
});
connection.connect();

app.get('/search',(req,res)=>{
   var query=`Select id,groupname,image_url from coingroup where groupname LIKE '${req.query.q}%'`;
    connection.query(query,(err,result)=>{
        if(err){
            res.status(500).send('Error retrieving data from database');
            throw err;
        } 
        res.json(result);
    });
});
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})