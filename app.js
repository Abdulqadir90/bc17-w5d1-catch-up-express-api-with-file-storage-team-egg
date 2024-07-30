import express from "express";


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


// create a get endpoint
// path should be /.recipes
// use getRecipes function
// respond with {success: boolean, payload: recipe array}



// GET request to get all recipes
app.get('/recipes', async (req, res) => { // This line defines a route handler for GET requests to the /recipes path.
  try {
    const allRecipies = await getRecipes()
    res.status(200).json({
      'success': true,
      'payload': allRecipies
    });
  } catch (error) {
    res.status(500).json({
      'success': false,
      'payload': null
    })
  }
})

// get request to get recipes by id
app.get('/recipes/:id', async (req, res) => {
  try {
    const id = req.params.id // how we access any of the url/ path parameters in express
    const newRecipe = await getRecipeByID(id)
    res.status(200).json({
      'success': 'eggById 🥚',
      'payload': newRecipe
    });
  } catch (error) {
    res.status(500).json({
      'success': false,
      'payload': null
    })
  }
})

// post request to create a new recipe
app.post('/recipes', async (req, res) => {
  try {
    const newEgg = req.body;
    const stillNew = await createRecipe(newEgg)
    res.status(200).json({
      'success': newEgg,
      'payload': stillNew
    });
  } catch (error) {
    res.status(500).json({
      'success': false,
      'payload': null
    })
  }
})

// patch request to update a recipe
app.patch('/recipes/:id', async(req, res) => {
  try {
    const recipe = req.params.id
    const updatedRecipe = req.body
    const updatedRec = await updateRecipeByID(recipe,updatedRecipe)
    res.status(200).json({
      'success': "freshly new updated eggy",
      'payload': updatedRec
    });
  } catch (error) {
    res.status(500).json({
      'success': false,
      'payload': null
    })
  }
})

// delete request to remove a recipe
app.delete('/recipes/:id', async (req, res) => {
  try {
    const recipeee = req.params.id
    const deletedRec = await deleteRecipeByID(recipeee)
    res.status(200).json({
      'success': "oh no, WHERE IS OUR EGG??!",
      'payload': deletedRec
    });
  } catch (error) {
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

