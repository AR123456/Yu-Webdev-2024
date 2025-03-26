// user enters ILoveProgramming and clicks submit
// deliver the secret page
import express from "express";
// dir
import { dirname } from "path";
import { fileURLToPath } from "url";
// body parser - NOTE this is now part of express , not needed if can just use app.use(express.urlencoded ())
// import bodyParser from "body-parser";
// dynamic path to index html
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userIsAuth = false;
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// function to check input does it = "ILoveProgramming"?
function checkPassword(req, res, next) {
  // console.log(req.body.password);
  const password = req.body.password;
  if (password == "ILoveProgramming") {
    userIsAuth = true;
  }
  // do some checking
  // if true put the path to secret page in var that gets passed in post
  next();
}
// this middleware gets used first
app.use(checkPassword);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  // if user is auth send secret page else send home page
  if (userIsAuth) {
    userIsAuth = false;
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    // res.sendFile(__dirname + "/public/index.html");
    res.redirect("/");
  }
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
