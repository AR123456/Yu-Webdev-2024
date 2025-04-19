import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Resolve __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  if (req.headers["x-fetch-cards"]) {
    // If AJAX request, return only #cards content
    try {
      const response = await axios.get(
        "https://bored-api.appbrewery.com/random"
      );
      const result = response.data;

      res.send(`
        <article class="card-item">
          <h2 class="card-activity">${result.activity}</h2>
          <div class="card-info">
            <span class="card-type">${result.type}</span>
            <span class="card-participants">Participants: ${result.participants}</span>
          </div>
        </article>
      `);
    } catch (error) {
      console.error("Failed to fetch activity:", error.message);
      res.send("<p>Error fetching activity.</p>");
    }
  } else {
    // Serve full HTML page
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    const selectedActivity = result.length
      ? result[Math.floor(Math.random() * result.length)]
      : null;

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/main.css" />
        <title>I'm Bored</title>
      </head>
      <body>
        <div class="container">
          <h1>Let's find something for you to do ✌️</h1>
          <form action="/" id="form" class="form" method="POST">
            <select name="type" class="form-select">
              <option value="">Random type</option>
              <option value="education">Education</option>
              <option value="charity">Charity</option>
              <option value="recreational">Recreational</option>
              <option value="relaxation">Relaxation</option>
              <option value="busywork">Busywork</option>
              <option value="social">Social</option>
              <option value="diy">DIY</option>
              <option value="music">Music</option>
            </select>
            <select name="participants" class="form-select">
              <option value="">Any number of people</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button type="submit" class="form-submit">Go</button>
          </form>
          <section id="cards" class="cards">
            ${
              selectedActivity
                ? `
              <article class="card-item">
                <h2 class="card-activity">${selectedActivity.activity}</h2>
                <div class="card-info">
                  <span class="card-type">${selectedActivity.type}</span>
                  <span class="card-participants">Participants: ${selectedActivity.participants}</span>
                </div>
              </article>
            `
                : "<div id='tag-error' class='tag-error'>No activities that match your criteria.</div>"
            }
          </section>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.send("<p>Error fetching activity.</p>");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
