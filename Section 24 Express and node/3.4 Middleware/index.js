import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// let app know about bandname
let bandName;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny"));
// present form to end user
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// middleware to String together band
function bandNameFromObject(req, res, next) {
  //  create and put in a var
  bandName = req.body.street + req.body.pet;
  next();
}
app.use(bandNameFromObject);
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
