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

// get request to get recipes by id
app.get('/recipes/:id', (req, res) => {
  try {
    res.status(200).json({
      'success': 'eggById 🥚',
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

// post request to create a new recipe
app.post('/recipes', (req, res) => {
  try {
    // const newEgg = req.body;
    res.status(200).json({
      // 'success': newEgg,
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

// patch request to update a recipe
app.patch('/recipes/:id', (req, res) => {
  try {
    res.status(200).json({
      'success': "freshly new updated eggy",
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

// delete request to remove a recipe
app.delete('/recipes/:id', (req, res) => {
  try {
    res.status(200).json({
      'success': "oh no, WHERE IS OUR EGG??!",
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

