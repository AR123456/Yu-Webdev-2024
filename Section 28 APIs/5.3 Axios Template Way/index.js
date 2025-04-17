import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
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
              result
                ? `
              <article class="card-item">
                <h2 class="card-activity">${result.activity}</h2>
                <div class="card-info">
                  <span class="card-type">${result.type}</span>
                  <span class="card-participants">Participants: ${result.participants}</span>
                </div>
              </article>
            `
                : "<p>No activity found.</p>"
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

app.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    console.error("Request failed:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
