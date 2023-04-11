const express = require("express");
const mysql = require("mysql2");
const app = express();
const connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Gulu19961211',
database:'coins'
});

app.get('/allgroups', (req, res) => {
    const query = 'SELECT id, groupname, image_url FROM coingroup';
    connection.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
      } else {
        res.json(result);
      }
    });
  });


  connection.connect((err)=>{
    if(err){
        console.log(err)
    }
});
app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
