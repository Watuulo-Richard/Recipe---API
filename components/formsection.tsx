import React from 'react'
import RecipeForm from './backend/recipieform'
import CustomCarousel from './recepiecarousel'
import { fetchCategories } from '@/actions/fetchrecipes'

export default async function FormSection() {
  const fetchedCategories = await fetchCategories()

  return (
    <div>
        <section className='flex flex-col-reverse md:flex-row'>
            <div className="w-full md:w-1/2">
                <RecipeForm fetchedCategories={fetchedCategories}/>
            </div>
            <div className="w-full md:w-1/2">
                <CustomCarousel/>
            </div>
        </section>
    </div>
  )
}
