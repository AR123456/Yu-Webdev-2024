import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const d = new Date();

  const day = d.getDay();
  let type;
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (day === 0 || day === 6) {
    type = "the weekend, get out and play!";
  } else {
    type = "just another work-a-day day.";
  }
  res.render("index.ejs", { dayNames: dayNames, day: day, type: type });
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
