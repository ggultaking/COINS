const express = require("express");
const mysql = require("mysql2");
const app = express();
const connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Gulu19961211',
database:'BOOTCAMP'
});
connection.connect((err)=>{
    if(err){
        console.log(err)
    }
});
// app.get("/search", (req, res) => {
//   res.json({ message: "123" });
// });
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
app.listen(3003, () => {
  console.log(`Server listening on port 3003`);
});