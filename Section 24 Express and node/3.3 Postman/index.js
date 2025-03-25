import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.post("/register", (req, res) => {
  // Do something with data from html form
  res.sendStatus(201);
});
app.put("/user/joe", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/joe", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/joe", (req, res) => {
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
