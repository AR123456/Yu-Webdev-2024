import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
