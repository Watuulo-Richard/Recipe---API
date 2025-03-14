"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { CarouselCategoryRecipe } from "@/components/backend/carouselcategoryrecipe"
import MultipleImageInput from "../imageupload"
import TextInput from "../textinput"
import TextArea from "../textarea"
import SubmitButton from "../submitbutton"
import { ClipboardPlus } from "lucide-react"
import { CategoryRecipeType } from "@/Types/types"
import { baseUrl } from "./recipieform"
import toast from "react-hot-toast"
import Image from "next/image"

const carouselImages = [
  "/R1.svg",
  "/R2.jpg",
  "/R3.jpg",
  "/R4.jpg",
  "/R5.jpg"
]
export function CategoryRecipeForm() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryRecipeType>()

  async function onSubmit(data:CategoryRecipeType){
    data.categoryImages = categoryRecipeImages
    data.slug = data.categoryTitle.split(" ").join("-").toLowerCase()
    console.log(data, "my data");
    
    try {
      setLoading(true)
      // console.log(data);
      const response = await fetch(`${baseUrl}/api/v1/recipecategories`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    setLoading(true)
    toast.success('Create Category Recipe Created Successfully!')
    console.log(response);
    setLoading(false)
    reset()
    setCategoryRecipeImages(initialImages)
    } catch (error) {
      setLoading(false)
      toast.error("Failed To Create Category Recipe!")
      console.log(error);
    }
  }
  const initialImages = [
    "/P-1.png",
    "/P-5.svg",
    "/P-3.svg",
    ];
  const [categoryRecipeImages, setCategoryRecipeImages] = useState(initialImages);
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <motion.div
        className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Category Recipe</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <TextInput
            register={register}
            errors={errors}
            label="Category Recipe Title"
            name="categoryTitle"
            placeholder="Enter category recipe title"
            />
          </div>

          <div>
            <MultipleImageInput
            title="Upload Images"
            imageUrls={categoryRecipeImages}
            setImageUrls={setCategoryRecipeImages}
            endpoint="imageUploader"
            />
            {categoryRecipeImages.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {categoryRecipeImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Uploaded ${index + 1}`}
                    className="w-16 h-16 object-cover rounded"
                    height={300}
                    width={500}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <TextArea
                register={register}
                errors={errors}
                label="Category Recipe Description"
                name="categoryDescription"
            />
          </div>
          <div className="">
            <SubmitButton className="w-full" loading={loading} title="Create Category" loadingTitle = "Creating Please wait..." buttonIcon={ClipboardPlus}/>
          </div>
        </form>
      </motion.div>

      <motion.div
        className="flex-1 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full h-full max-w-md overflow-hidden">
          <CarouselCategoryRecipe images={carouselImages.length > 0 ? carouselImages : ["/P-2.svg?height=400&width=400"]} />
        </div>
      </motion.div>
    </div>
  )
}

