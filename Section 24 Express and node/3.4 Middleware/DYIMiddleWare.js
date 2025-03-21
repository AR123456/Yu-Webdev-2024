import express from "express";

const app = express();
const port = 3000;
// DYI middleware
function logger(req, res, next) {
  // order is important
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}
// app.use() takes in a function that has a request, response and next method
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
