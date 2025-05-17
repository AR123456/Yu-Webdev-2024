import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  // TODO console.log what user puts in user name and password field
  console.log(req.body.username);
  console.log(req.body.password);
});

app.post("/login", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
