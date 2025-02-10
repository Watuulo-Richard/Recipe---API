import React from 'react'
import RecipeForm from '../../../../../components/backend/recipieform'
import { fetchSingleRecipe } from '@/actions/fetchrecipes'


export default async function page({params}:{params:Promise<{slug:string}>}) {
    const {slug} = await params
    console.log(slug, "my slug")
    const singlefetchedRecipe = await fetchSingleRecipe(slug)
      console.log(singlefetchedRecipe)
  return (
    <div>
        <RecipeForm receivedSingleRecipeFromFetch = {singlefetchedRecipe}/>
    </div>
  )
}
