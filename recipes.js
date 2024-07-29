
// module imports
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

// our global variable
const FileName = "recipes.json";

// GET ALL RECIPES

// this function reads data from a JSON file
export async function getRecipes() {
    try {
        const Data = await fs.readFile(FileName, 'utf-8')
        const jsonData = JSON.parse(Data)
        return jsonData
    } catch (error) {
        console.error('Error reading the EGGS:', error)
    }
}



// // test 
// const testEgg = await getRecipes()
// console.log(testEgg)

// GET A RECIPE BY ID
// create variable 
// define id 
export async function getRecipeByID(id) {}



// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}


