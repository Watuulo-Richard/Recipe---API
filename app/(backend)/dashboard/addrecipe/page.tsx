import { fetchCategories } from '@/actions/fetchrecipes'
import RecipeForm from '@/components/backend/recipieform'
import React from 'react'

export default async function page() {
  const fetchedCategories = await fetchCategories()
  // console.log(fetchedCategories);
  return (
    <div>
      <RecipeForm fetchedCategories = {fetchedCategories}/>
    </div>
  )
}
