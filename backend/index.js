const express = require("express");
const mysql = require("mysql2");
const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "<root44>",
  database: "coins",
});

app.get("/allgroups", (req, res) => {
  const query = "SELECT id, groupname, image_url FROM coingroup";
  connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
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
