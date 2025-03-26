import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
let weekend = false;
function getDay(req, res, next) {
  const d = new Date();

  const day = d.getDay();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // if (day === 1 || day === 7) {
  //   let weekend = true;
  // }
  res.render(` <h1>Hey, its ${dayNames[day]}, !</h1>`);
  // res.send(` <h1>Hey, its ${dayNames[day]}, !</h1>`);
  next();
}
app.use(getDay);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/oldSchool/index.html");
  //
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
