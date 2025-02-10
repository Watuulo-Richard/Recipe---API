/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
// import Select from "react-tailwindcss-select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../textinput";
import TextArea from "../textarea";
import MultipleImageInput from "../imageupload";
import SubmitButton from "../submitbutton";
import { RecipeType } from "@/Types/types";
import { CircleDollarSign, SmilePlus } from "lucide-react";
import { RecipeProduct } from "@prisma/client";
import { fetchSingleRecipe } from "@/actions/fetchrecipes";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function RecipeForm({receivedSingleRecipeFromFetch}:{receivedSingleRecipeFromFetch?:RecipeProduct | null}) {
// setting-up-form
const {
  register,
  handleSubmit,
  // watch,
  reset,
  formState: { errors },
} = useForm<RecipeType>({
  defaultValues: {
    recipeName: receivedSingleRecipeFromFetch?.recipeName,
    recipePrice: receivedSingleRecipeFromFetch?.recipePrice,
    recipeDescription: receivedSingleRecipeFromFetch?.recipeDescription,
  }
})

async function onSubmit(data:RecipeType){
  console.log(data)
  data.recipePrice = Number(data.recipePrice)
  data.slug = data.recipeName.split(' ').join('-').toLowerCase()
  data.recipeImages = productImages
  setLoading(true)
  if (receivedSingleRecipeFromFetch) {
    try {
      const response = await fetch(`${baseUrl}/api/v1/recipeproducts/${receivedSingleRecipeFromFetch.slug}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      console.log(response)
      setLoading(false)
      reset()
      toast.success('Recipe Updated Successfully!👍🏾👍🏾👍🏾')
    } catch (error) {
      console.log(error);
    }
  }else {
    try {
      const response = await fetch(`${baseUrl}/api/v1/recipeproducts`,{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data),
      })
      console.log(response)
      setLoading(false)
      reset()
      toast.success('Recipe Created😊 Successfully!👍🏾👍🏾👍🏾')
    } catch (error) {
      setLoading(false)
      toast.error('Failed To Create Recipe!😡😡😡')
    }
  }
}
const [loading, setLoading] = useState(false);
const initialImages = receivedSingleRecipeFromFetch?.recipeImages || [
    "/6.svg",
    "/9.svg",
    "/10.svg",
    ];
const [productImages, setProductImages] = useState(initialImages);
 
return (
 
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="w-full">
    <div className="lg:col-span-8 col-span-full space-y-3 flex items-center justify-center">
      <Card className="">
        <CardHeader>
          <CardTitle>Create Your Delicious Recipe 🍽️✨</CardTitle>
          <CardDescription>
          Share your favorite recipes with the world! 🍳✨ Fill in the details below to create a step-by-step guide for your delicious dish.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <TextInput
                register={register}
                errors={errors}
                toolTipText = "Enter the recipe name or ingredients here.😊"
                label="Enter Recipe"
                name="recipeName"
              />
            </div>
            <div className="grid gap-3">
              <TextInput
                register={register}
                errors={errors}
                toolTipText = "💲Specify the cost of the recipe in your preferred currency."
                label="Enter Recipe Price"
                name="recipePrice"
                icon={CircleDollarSign}
              />
            </div>
            <div className="grid gap-3">
              <TextArea
                register={register}
                errors={errors}
                label="Enter Recipe Description"
                helperText = "Enter a brief description of the recipe.😊"
                name="recipeDescription"
              />
            </div>
            <Card>  
                <MultipleImageInput
                title="Recipe Images"
                imageUrls={productImages}
                setImageUrls={setProductImages}
                endpoint="imageUploader"
                />
            </Card>
          </div>
          <div className="grid gap-3 py-2">
            <SubmitButton loading={loading} title="Add Recipe" loadingTitle = "Saving Please wait..."/>
        </div>
        </CardContent>
      </Card>
    </div>
  </div>
</form>
 
);
}
 