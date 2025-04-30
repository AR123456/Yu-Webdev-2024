import express, { response } from "express";
import bodyParser from "body-parser";
// import the postgres module
import pg from "pg";
const app = express();
const port = 3000;
// boilerplate configuration
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "midnight",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// access to the home page
app.get("/", async (req, res) => {
  //query db for country visited - select column from table
  const result = await db.query("SELECT country_code FROM visited_countries");
  // declare the var
  let countries = [];
  // push just the country code to countries array
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  // pass the array to ejs
  res.render("index.ejs", { countries: countries, total: countries.length });
  // close the db
  db.end;
});
// this is add since it is the form action
app.post("/add", async (req, res) => {
  // get the string input
  const input = req.body["country"];
  // query db table of countries  where country_name = input and store in result var
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
  console.log(result);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
