import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
