var guestList = ["Steve", "Tom", "Paul", "Judy"];

let random = Math.floor(Math.random() * guestList.length);
console.log(random);
let payer = guestList[random];

console.log(`${payer} is going to buy lunch today!`);
