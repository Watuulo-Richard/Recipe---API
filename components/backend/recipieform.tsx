/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../textinput";
import TextArea from "../textarea";
import MultipleImageInput from "../imageupload";
import SubmitButton from "../submitbutton";
import { RecipeType } from "@/Types/types";
import { CircleDollarSign, SmilePlus } from "lucide-react";
import { CategoryRecipe, RecipeProduct } from "@prisma/client";
import FormSelectInput from "./recipe-form-select";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function RecipeForm({receivedSingleRecipeFromFetch,fetchedCategories}:{receivedSingleRecipeFromFetch?:RecipeProduct | null;fetchedCategories:CategoryRecipe[]}) {
console.log(fetchedCategories);

const [selectedMainCategory, setSelectedMainCategory] = useState<any>("");
const receivedCategories = fetchedCategories.map((fetchedCategory)=>(
  {
    value : fetchedCategory.id,
    label : fetchedCategory.categoryTitle
  }
))
console.log(selectedMainCategory);
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
  data.recipePrice = Number(data.recipePrice)
  data.slug = data.recipeName.split(' ').join('-').toLowerCase()
  data.recipeImages = productImages
  data.categoryRecipeId = selectedMainCategory.value
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
      setProductImages(initialImages)
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
    <div className="p-6">
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
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                    <FormSelectInput
                      label="Recipe Categories"
                      options={receivedCategories}
                      option={selectedMainCategory}
                      setOption={setSelectedMainCategory}
                      toolTipText="Add New Recipe Category"
                      href="/dashboard/addcategoryrecipe"
                    />
                  </div>
                </CardContent>
            </Card>
            <div>  
                <MultipleImageInput
                title="Recipe Images"
                imageUrls={productImages}
                setImageUrls={setProductImages}
                endpoint="imageUploader"
                />
            </div>
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
 