import { RecipeProduct } from "@prisma/client"

const API = 'http://localhost:3000/api/v1/recipeproducts'
export async function fetchAllRecipes(){
    try {
        const response = await fetch(API)
        const fetchedRecipes = await response.json()
        return fetchedRecipes.data as RecipeProduct[]
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function fetchSingleRecipe(slug:string){
    const fetchSingleRecipeAPI = `http://localhost:3000/api/v1/recipeproducts/${slug}`
    try {
        const response = await fetch(fetchSingleRecipeAPI)
        const singleFetchedRecipe = await response.json()
        return singleFetchedRecipe.data as RecipeProduct
    } catch (error) {
        console.log(error);
        return null
    }
}
