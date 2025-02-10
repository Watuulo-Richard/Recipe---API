import React from 'react'
import RecipeCard from './recipecard'
import { RecipeProduct } from '@prisma/client'

export default function AllRecipeCardsSection({receivedRecipesFromFetch}:{receivedRecipesFromFetch:RecipeProduct[]}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
            receivedRecipesFromFetch.map((recipe, index)=>{
                return (
                    <RecipeCard key={index} receivedRecipe = {recipe}/>
                )
            })
        }
    </div>
  )
}
