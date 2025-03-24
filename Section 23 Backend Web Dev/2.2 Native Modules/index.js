const fs = require("fs");
// https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options
// fs.writeFile("message.txt", "Hello there! ", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("the file was saved");
//   }
// });

fs.readFile("message.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
