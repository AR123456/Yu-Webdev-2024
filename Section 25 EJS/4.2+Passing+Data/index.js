import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function checkNameLength(req, res, next) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;

  console.log(firstName);
  console.log(lastName);
  next();
}
app.use(checkNameLength);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  // checkNameLength(req.body);
  // get data from form
  // determine lettters in name
  // write the number of letters to the  page
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
