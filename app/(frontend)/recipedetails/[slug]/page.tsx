import type { Metadata } from "next"
import RecipeDetail from "@/components/recipe-detail"
import { fetchSingleRecipe } from "@/actions/fetchrecipes"

export const metadata: Metadata = {
  title: "Vegetable Pasta Recipe | Chili POS",
  description: "A delicious vegetable pasta recipe with fresh ingredients and easy preparation steps.",
}

export default async function page({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params
  console.log("oh my God", slug);
  const fetchedSingleRecipe = await fetchSingleRecipe(slug)
  return <RecipeDetail SingleRecipe = {fetchedSingleRecipe}/>
}

