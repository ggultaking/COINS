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
  SELECT *
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
  SELECT coins.id, coins.coin_name, coins.gorup_id, coins.description_s, images.image_url_front,country.country,composition.composition,quality.quality 
  FROM coins 
  JOIN images ON coins.image_id = images.id 
  JOIN country ON coins.country_id=country.id
  JOIN composition ON coins.composition_id=composition.id
  JOIN quality ON coins.quality.id=quality.id
  WHERE coins.gorup_id =${id};
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
app.get("/advancefilter/:price_from/:price_to/:year_from/:year_to", (req, res) => {
  const { price_from} = req.params;
  const { price_to} = req.params;
  const { year_from} = req.params;
  const { year_to} = req.params;
  const query = `
  SELECT coins.id, coins.coin_name,coins.year, coins.price_$,coins.gorup_id, coins.description_s, images.image_url_front,country.country,composition.composition,quality.quality 
  FROM coins 
  JOIN images ON coins.image_id = images.id 
  JOIN country ON coins.country_id=country.id
  JOIN composition ON coins.composition_id=composition.id
  JOIN quality ON coins.quality.id=quality.id
  WHERE price_$ between ${price_from} and ${price_to} and year between ${year_from} and ${year_to};
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
  const query = `SELECT * FROM coingroup WHERE groupname LIKE '${req.query.query}%'`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving data from database");
      throw err;
    } else {
      res.json(result);
    }
  });
});
app.get("/searchcoin", (req, res) => {
  const query = `SELECT coins.id, coins.coin_name, coins.gorup_id, coins.description_s, images.image_url_front 
  FROM coins 
  JOIN images ON coins.image_id = images.id 
  WHERE coins.coin_name LIKE '${req.query.query}%'`;
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
