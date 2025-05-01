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
// creating a get visited function
async function checkVisited() {
  //query db for country visited - select column from table
  const result = await db.query("SELECT country_code FROM visited_countries");
  // declare the var
  let countries = [];
  // push just the country code to countries array
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
// access to the home page
app.get("/", async (req, res) => {
  const countries = await checkVisited();
  // pass the countries array to ejs
  res.render("index.ejs", { countries: countries, total: countries.length });
  // close the db
  db.end;
});
// this is add since it is the form action
app.post("/add", async (req, res) => {
  // get the string input
  const input = req.body["country"];

  // query db table of countries  where country_name = input using the $1 place holder and store in result var
  // the $1 allows us to put an expression in SQL
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
  // check for a null result - no match
  if (result.rows.length !== 0) {
    //
    const data = result.rows[0];
    const countryCode = data.country_code;
    //  add the country code found to the db using insert $1 SQL expression
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  } else {
    // handle no match by going back to home
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
