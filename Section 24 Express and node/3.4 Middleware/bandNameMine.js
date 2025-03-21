import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny"));
// present form to end user
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res, next) => {
  console.log(req.body);
  res.send(`<h2>Your band name is : ${req.body.street} ${req.body.pet}</h2>`);
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
