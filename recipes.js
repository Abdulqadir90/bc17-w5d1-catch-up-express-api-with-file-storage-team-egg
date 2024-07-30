
// module imports
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}
async function writeJsonFile(filePath, data) {
    try {
      	const stringifiedData = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, stringifiedData);
        console.log('File written successfully!');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

// our global variable
const FileName = "recipes.json";

// GET ALL RECIPES

// recipes in the recipes.json
// use readJSONfile to read that file 
//return a list of recipes

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
// read the json file for recipes
// loop through and find the object with the same id as "id"
export async function getRecipeByID(id) {}



// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}


