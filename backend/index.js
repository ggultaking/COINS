const express = require("express");
const mysql = require("mysql2");
const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Gulu19961211",
  database: "coins",
});
app.get("/grouplist", (req, res) => {
  const query = "SELECT c.coin_name,c.gorup_id,c.description_s,i.image_url_front FROM coins as c inner join images as i where c.image_id=i.id";
  connection.query(query, (err, result) => {
    if (err) {
  
      res.status(500).send("Error retrieving data from database");
      throw err;
    } else {
      res.json(result);
    }
  });
});
app.get("/allgroups", (req, res) => {
  const query = "SELECT * FROM coingroup";
  connection.query(query, (err, result) => {
    if (err) {
  
      res.status(500).send("Error retrieving data from database");
      throw err;
    } else {
      res.json(result);
    }
  });
});
app.get("/search", (req, res) => {
  const query = `Select id,groupname,image_url from coingroup where groupname LIKE '%${req.query.query}%'`;

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving data from database");
      throw err;
    } else {
      res.json(result);
    }
  });
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
});
app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
