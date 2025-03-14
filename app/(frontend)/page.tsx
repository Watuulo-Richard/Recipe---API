import { fetchCategories, fetchTableRecipes } from '@/actions/fetchrecipes';
import FrontEndDashBoard from '@/components/front-dash';

export type CurrencyItemType = {
  value: string;
  label: string;
  rate: number;
};
export default async function page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const API = `${baseUrl}/api/v1/recipeproducts`

  const fetchedProducts = await fetch(API).then(res => res.json());
  const products = fetchedProducts?.data
  const fetchedCategories = await fetchCategories()

  const tableRecipes = await fetchTableRecipes()
  return (
    <>
     <FrontEndDashBoard fetchedTableRecipes={tableRecipes} fetchedCategories = {fetchedCategories} fetchedProducts = { products }/>
    </>
  )
}