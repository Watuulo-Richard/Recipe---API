import { fetchAllRecipes } from '@/actions/fetchrecipes'
import AllRecipeCardsSection from '@/components/backend/allrecipecardssection'
import React from 'react'

export  default async function page() {
  const fetchedRecipes = await fetchAllRecipes()
  // console.log(fetchedRecipes)
  return (
    <div className='p-4'>
        <AllRecipeCardsSection receivedRecipesFromFetch = {fetchedRecipes}/>
    </div>
  )
}
