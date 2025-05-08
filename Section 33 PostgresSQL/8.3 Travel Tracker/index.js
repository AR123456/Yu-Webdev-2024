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
  const input = req.body["country"];
  try {
    //  take the input and find its matching country code
    const result = await db.query(
      // here % is wild card, double pipes are wildcards, as long as the value $1 between the pipes matches anywhere in the country name its a match - make both lower case
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      //   all is well, country found, check if it is a dup if not post
      // when db set up made the country_code CHAR(2) NOT NULL UNIQUE
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      // found a match in the db list of countries but it has already been added
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        // passing over the error place holder in ejs
        error: "Country has already been added, try again. ",
      });
    }
  } catch (err) {
    // catching case where input does not match the db
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      // passing over the error place holder in ejs
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
