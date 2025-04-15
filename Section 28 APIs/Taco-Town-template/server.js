import express from "express";
import bodyParser from "body-parser";
import path from "path"; //  Import path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// let recipe;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/recipe", (req, res) => {
  const choice = req.body.choice?.toLowerCase();
  if (!choice) {
    return res.status(400).send("No recipe choice provided");
  }
  const recipes = JSON.parse(recipeJSON);
  let recipe;
  switch (choice) {
    case "chicken":
      recipe = recipes[0];
      break;
    case "beef":
      recipe = recipes[1];
      break;
    case "fish":
      recipe = recipes[2];
      break;
    default:
      return res.status(400).send("Invalid recipe choice");
      break;
  }
  // if (!recipe) {
  //   return res.status(400).send("Recipe not found");
  // }

  let everyTopping = recipe.ingredients.toppings
    .map((topping) => `<li>${topping.quantity} of ${topping.name}</li>`)
    .join("");
  const recipeTemplate = `
  <h2>${recipe.name}</h2>
  <h3>Ingredients:</h3>
   <ul id="ingredientsList">
     <li>${recipe.ingredients.protein.name}, ${recipe.ingredients.protein.preparation}</li>
     <li>${recipe.ingredients.salsa.name}</li>
      ${everyTopping}
   </ul>

`;
  res.send(recipeTemplate);
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
