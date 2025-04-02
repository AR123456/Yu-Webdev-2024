import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body.fName.length);
  console.log(req.body.lName.length);
  let nameLength = req.body.fName + req.body.lName;
  res.send(`<h2>Your name has ${nameLength} letters </h2>`);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
