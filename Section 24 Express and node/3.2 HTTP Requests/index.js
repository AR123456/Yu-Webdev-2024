import express from "express";

const app = express();
const port = 3000;
// get express method
// "/" is root or home page
app.get("/", (req, res) => {
  res.send("Hello from the server");
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
