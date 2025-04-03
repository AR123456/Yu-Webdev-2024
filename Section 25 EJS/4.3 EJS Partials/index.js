import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
