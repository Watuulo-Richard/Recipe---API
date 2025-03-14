import { fetchAllRecipes, fetchCategories, fetchTableRecipes } from '@/actions/fetchrecipes';
import FrontEndDashBoard from '@/components/front-dash';

export type CurrencyItemType = {
  value: string;
  label: string;
  rate: number;
};
export default async function page() {
  const fetchedProducts = await fetchAllRecipes()
  const fetchedCategories = await fetchCategories()

  const tableRecipes = await fetchTableRecipes()
  return (
    <>
     <FrontEndDashBoard fetchedTableRecipes={tableRecipes} fetchedCategories = {fetchedCategories} fetchedProducts = { fetchedProducts }/>
    </>
  )
}