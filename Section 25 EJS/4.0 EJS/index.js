import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const d = new Date();

  const day = d.getDay();
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
