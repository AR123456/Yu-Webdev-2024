import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  const itemList =
    data.seconds % 2 === 0
      ? `<ul>${data.items.map((fruit) => `<li>${fruit}</li>`).join("")}</ul>`
      : "<p>No items to display</p>";

  const html = `   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
    </head>
    <body>
      <h1>${data.title}</h1>
      <p>Current second: ${data.seconds}</p>
   
      ${itemList}
      <p>${data.htmlContent}</p>
      <footer>
        <p>Copyright © from footer</p>
      </footer>
    </body>
    </html>`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
