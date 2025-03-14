import { fetchSingleCategory } from "@/actions/fetchrecipes"
import CategoryPage from "@/components/category-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu Categories | Chili POS",
  description: "Explore our delicious menu categories and find your favorite dishes.",
}

export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params
  const singleFetchedCategory = await fetchSingleCategory(slug)
  // console.log(slug, "my generated slug ✅");
 
  if (!singleFetchedCategory) {
    return <div>Category not found</div>;
  }
  
  return <CategoryPage singleFetchedCategory = {singleFetchedCategory}/>
}

