// user enters ILoveProgramming and clicks submit
// deliver the secret page
import express from "express";
// dir
import { dirname } from "path";
import { fileURLToPath } from "url";
// body parser
import bodyParser from "body-parser";
// dynamic path to index html
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
let password;

// function to check input does it = "ILoveProgramming"?
function checkPassword(req, res, next) {
  // do some checking
  // if true put the path to secret page in var that gets passed in post
  next();
}
app.use(checkPassword);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  // res.sendFile the secret page
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
