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
app.get("/coin/:id", (req, res) => {
  const { id } = req.params;
  const query = `
  SELECT coins.id,coins.coin_name,images.image_url_front, images.image_url_back, coingroup.groupname, composition.composition, country.country, quality.quality
FROM coins 
JOIN images ON coins.image_id = images.id
JOIN coingroup on coins.gorup_id=coingroup.id
JOIN composition on coins.composition_id=composition.id
JOIN country on coins.country_id=country.id
JOIN quality on coins.quality_id=quality.id
WHERE coins.id =${id}
  `;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving data from database");
      throw err;
    } else {
      res.json(result);
      
    }
  });
});
app.get("/grouplist/:id", (req, res) => {
  const { id } = req.params;
  const query = `
  SELECT *
  FROM coins 
  INNER JOIN images ON coins.image_id = images.id
  WHERE coins.gorup_id = ${id}
  `;
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
  const query = `SELECT id, groupname, image_url FROM coingroup WHERE groupname LIKE '%${req.query.query}%'`;
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

app.listen(3003, () => {
  console.log(`Server listening on port 3003`);
});
