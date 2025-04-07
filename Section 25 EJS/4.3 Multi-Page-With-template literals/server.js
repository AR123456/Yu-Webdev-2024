import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (including index.html)
app.use(express.static(path.join(__dirname, "public")));

// Header route
app.get("/header", (req, res) => {
  res.send(`
        <header style="background:#333; color:white; padding:10px; text-align:center;">
            <h1>My Website</h1>
            <nav>
                <a href="/" data-route="/">Home</a> | 
                <a href="/about" data-route="/about">About</a> | 
                <a href="/contact" data-route="/contact">Contact</a>
            </nav>
        </header>
    `);
});

// Footer route
app.get("/footer", (req, res) => {
  res.send(`
        <footer style="background:#333; color:white; padding:10px; text-align:center;">
            <p>&copy; 2025 My Website</p>
        </footer>
    `);
});

// Home content
app.get("/content", (req, res) => {
  res.send(`<h2>Welcome to My Website</h2><p>This is the home page.</p>`);
});

// About content
app.get("/content/about", (req, res) => {
  res.send(`<h2>About Me</h2><p>This is the about page.</p>`);
});

// Contact content
app.get("/content/contact", (req, res) => {
  res.send(`<h2>Contact Me</h2><p>Email: example@example.com</p>`);
});

// Catch-all for unknown routes (redirect to home)
app.get("*", (req, res) => {
  res.redirect("/");
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
