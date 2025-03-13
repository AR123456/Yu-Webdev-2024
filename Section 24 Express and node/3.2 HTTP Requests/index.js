import express from "express";

const app = express();
const port = 3000;
// get express method
// "/" is root or home page
app.get("/", (req, res) => {
  // res.send("Hello from the server");
  res.send(` <h1>How about a text template ? </h1>`);
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
