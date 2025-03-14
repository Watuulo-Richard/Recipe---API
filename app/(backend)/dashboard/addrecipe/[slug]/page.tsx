import React from 'react'
import { fetchCategories, fetchSingleRecipe } from '@/actions/fetchrecipes'
import RecipeForm from '@/components/backend/recipieform'


export default async function page({params}:{params:Promise<{slug:string}>}) {
    const {slug} = await params
    // console.log(slug, "my slug")
    const singlefetchedRecipe = await fetchSingleRecipe(slug)

    const fetchedCategories = await fetchCategories()
      // console.log(singlefetchedRecipe)
  return (
    <div>
        <RecipeForm fetchedCategories={fetchedCategories} receivedSingleRecipeFromFetch = {singlefetchedRecipe}/>
    </div>
  )
}
