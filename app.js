import express from "express";
// import helmet
import helmet from 'helmet';


import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// helmet 
app.use(helmet());

// Ask Helmet to ignore the X-Powered-By header.
app.use(
  helmet({
    xPoweredBy: false,
  })
);

// GET request to get all recipes
app.get('/recipes', (req, res) => {
  try {
    res.status(200).json({
      'success': 'egg 🥚',
      'payload': null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      'success': false,
      'payload': null
    })
  }
})


// Event listener that listens out for any requests made by client.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

