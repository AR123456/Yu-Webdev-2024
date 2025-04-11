import express from "express";
import bodyParser from "body-parser";
import path from "path"; // ✅ Import path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
let recipe;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.post("/recipe", (req, res) => {
//   //Step 3: Write your code here to make this behave like the solution website.
//   //  when user clicks of the button to submit send post request to recipe route
//   // console.log(req.body.choice);
//   // switch (req.body.choice) {
//   //   case "chicken":
//   //     recipe = JSON.parse(recipeJSON)[0];
//   //     break;
//   //   case "beef":
//   //     recipe = JSON.parse(recipeJSON)[1];
//   //     break;
//   //   case "fish":
//   //     recipe = JSON.parse(recipeJSON)[2];
//   //     break;
//   //   default:
//   //     break;
//   // }
//   // console.log(recipe.ingredients.protein.name);
//   //Step 4: Add code to views/index.ejs to use the recieved recipe object.
//   // res.send(template);
//   // res.redirect("/");
// });

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
// const template = `<!DOCTYPE html>
// <html>
// <head>
//   <title>Taco Recipes</title>
//   <link rel="stylesheet" type="text/css" href="/styles/main.css">
// </head>
// <body>
//   <h1>Taco Town 🌮</h1>

//   <form action="/recipe" method="POST" class="buttons
//   ">
//     <button type="submit" value="chicken" name="choice">🍗</button>
//     <button type="submit" value="beef" name="choice">🥩</button>
//     <button type="submit" value="fish" name="choice">🐟</button>
//   </form>
//   <div id="recipeContainer" class="hidden">

//       <h2 id="recipeTitle">
//       ${recipe.name}
//          </h2>
//       <h3>Ingredients:</h3>
//       <ul id="ingredientsList">
//         <li>
//         ${recipe.ingredients.protein.name},${
//   recipe.ingredients.protein.preparation
// }
//         </li>
//         <li>${recipe.ingredients.salsa.name} </li>
//         ${recipe.ingredients.toppings.array.forEach((topping) => {
//           console.log(topping);
//           // <li>
//           //   ${topping.quantity}of${topping.name}
//           // </li>;
//         })}

//       </ul>

//   </div>
// </body>
// </html>`;
