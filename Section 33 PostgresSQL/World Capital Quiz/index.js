import express from "express";
import bodyParser from "body-parser";
// use postgres package
import pg from "pg";
const app = express();
const port = 3000;
let quiz;
// define the client  with object of required items
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "midnight",
  port: 5432,
});
// connect to the db
db.connect();
// make the query when the page loads var quiz becomes an array of records from the db
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.err("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  // close connection to db when query done
  db.end();
});
let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  // trim extra characters if there are any
  let answer = req.body.answer.trim();
  let isCorrect = false;
  // normalize casing
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
