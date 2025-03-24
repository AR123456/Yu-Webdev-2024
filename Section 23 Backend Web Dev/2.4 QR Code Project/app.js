/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Give me a URL and I will give you a QR code! ",
    },
  ])
  .then((answers) => {
    // save to fs
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("the_qr_code.png"));

    fs.writeFile("message.txt", answers.url, (err) => {
      if (err) {
        throw err;
      }
    });

    // qrStream.on("finish", () => console.log("QR saved"));
  })
  .catch((error) => {
    if (error.isTryErr) {
      // something
      console.log("error");
    } else {
      // something
      console.log(error);
    }
  });
