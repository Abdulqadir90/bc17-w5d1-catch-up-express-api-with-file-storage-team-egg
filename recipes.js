import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const eggFileName = "recipes.json";

// import recipie data jason


// GET ALL RECIPES
export async function getRecipes() {
    try {
        const eggRecipieData = await fs.readFile(eggFileName, 'utf-8')
        const jsonEggRecipieData = JSON.parse(eggRecipieData)
        return jsonEggRecipieData
    } catch (error) {
        console.error('Error reading the EGGS:', error)
    }
}

// // test 
// const testEgg = await getRecipes()
// console.log(testEgg)

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
