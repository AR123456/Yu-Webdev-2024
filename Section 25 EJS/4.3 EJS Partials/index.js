import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/views/about", (req, res) => {
  res.render("/views/about.ejs");
});
app.get("/views/contact", (req, res) => {
  res.render("/views/contact.ejs");
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
