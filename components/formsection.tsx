import React from 'react'
import RecipeForm from './backend/recipieform'
import CustomCarousel from './recepiecarousel'

export default function FormSection() {
  return (
    <div>
        <section className='flex flex-col-reverse md:flex-row'>
            <div className="w-full md:w-1/2">
                <RecipeForm/>
            </div>
            <div className="w-full md:w-1/2">
                <CustomCarousel/>
            </div>
        </section>
    </div>
  )
}
