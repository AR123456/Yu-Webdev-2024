import express from "express";

const app = express();
const port = 3000;
// get express method
// "/" is root or home page
app.get("/", (req, res) => {
  res.send(` <h1>Home is "/" </h1>`);
});
// "/" is root or home page
app.get("/about", (req, res) => {
  res.send(` <h1>This is the about end point </h1>`);
});
app.get("/contact", (req, res) => {
  res.send(` <h1>Getting the contact page </h1>`);
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
