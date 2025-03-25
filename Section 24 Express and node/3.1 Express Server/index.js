// can use es6 but be sure to make .json "module"
import express from "express";
// create the app
const app = express();
// put the port in a var
const port = 3000;

app.listen(port, () => {
  // callback function
  console.log(`Server running on port ${port}.`);
});
