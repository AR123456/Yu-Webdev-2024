// old way
// var generateName = require("sillyname");
// var sillName = generateName();
import generateName from "sillyName";
let sillName = generateName();

console.log(`If I was a super hero, my name would be ${sillName}`);
import { randomSuperhero } from "superheroes";
const superHeroName = randomSuperhero();

console.log(`This is my real super hero name ! ${superHeroName}`);
