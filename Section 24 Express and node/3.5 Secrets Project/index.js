//presented with index/html page
// user enters ILoveProgramming and clicks submit
// deliver the secret page
import express from "express";
// dir

// body parser
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.sendStatus(201);
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
