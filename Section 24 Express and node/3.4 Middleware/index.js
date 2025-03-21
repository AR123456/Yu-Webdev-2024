import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}
app.use(logger);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
