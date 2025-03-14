"use server"

import { ExchangeRatesType } from "@/Types/types"
import { CategoryRecipe, RecipeProduct } from "@prisma/client"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const API = `${baseUrl}/api/v1/recipeproducts`
export async function fetchAllRecipes(){
    try {
        const response = await fetch(API,)
        const fetchedRecipes = await response.json()
        return fetchedRecipes.data as RecipeProduct[]
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function fetchSingleRecipe(slug:string){
    const fetchSingleRecipeAPI = `${baseUrl}/api/v1/recipeproducts/${slug}`
    try {
        const response = await fetch(fetchSingleRecipeAPI,{cache:"no-store"})
        const singleFetchedRecipe = await response.json()
        return singleFetchedRecipe.data as RecipeProduct
    } catch (error) {
        console.log(error)
        return null
    }
}

const CategoryAPI = `${baseUrl}/api/v1/recipecategories`
export async function fetchCategories() {
    try {
        const response = await fetch(CategoryAPI)
        const fetchedCategories = await response.json()
        // console.log(fetchCategories);
        return fetchedCategories.data as CategoryRecipe[]
    } catch (error) {
        console.log(error);
        return []
    }

}

export async function fetchSingleCategory(slug:string){ 
    const singleCategoryRecipeAPI = `${baseUrl}/api/v1/recipecategories/${slug}`
    try {
        const response = await fetch(singleCategoryRecipeAPI)
        const singleFetchedCategoryRecipe = await response.json()
        // console.log("Function ✅;", singleFetchedCategoryRecipe);
        return singleFetchedCategoryRecipe.data as CategoryRecipe
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function fetchExchangeRatesFromAPI(countryCurrencyCode:string) {
    try {
        const ExchangeRatesFromAPI = `https://v6.exchangerate-api.com/v6/37abf601c6487ad6f71f6647/latest/${countryCurrencyCode}`
        const response = await fetch(ExchangeRatesFromAPI)
        const fetchedExchangeRates = await response.json()
        console.log(fetchedExchangeRates);
        return fetchedExchangeRates as ExchangeRatesType
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function fetchTableRecipes() {
    const tableRecipesAPI = `${baseUrl}/api/v1/recipeclienttables`
    try {
        const response = await fetch(tableRecipesAPI)
        const fetchedTableRecipes = await response.json()
        const tableRecipes = fetchedTableRecipes.data
        return tableRecipes
    } catch (error) {
        console.log(error);
        return {
            error,
            status:500
        }
    }
}
