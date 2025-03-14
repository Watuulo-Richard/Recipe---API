import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist } from "zustand/middleware";

export type RecipeOrdered = {
    slug: string;
    recipeQuantity: number;
    recipeTitle: string;
    recipePrice: number;
    recipeImages: string;
}

type OrderState = {
    OrderedRecipesArray: RecipeOrdered[]
    handleOrderNow: (recipe:RecipeOrdered)=>void
    handleRemoveOrder:(slug: string)=>void
    handleQuantityIncrement:(slug: string)=>void
    handleQuantityDecrement:(slug: string)=>void
    handleClear:()=>void
}

export const useOrderState = create<OrderState>()(
    persist(
    (set, get) => ({
        OrderedRecipesArray:[],

        handleOrderNow:(recipe)=>{
            const myOrderedArray = get().OrderedRecipesArray
            
            const existingRecipesInCart = myOrderedArray.find((item)=>item.slug === recipe.slug)
            if(existingRecipesInCart){
                toast.error('Recipe Already Exists')
            }
            else {
                const myOrderedArray = get().OrderedRecipesArray
                set({OrderedRecipesArray:[...myOrderedArray, recipe]})
                toast.success('Recipe Added In Cart Successfully...!!!')
                console.log(myOrderedArray);                     

            }
        },

        handleRemoveOrder:(slug)=>{
            const myOrderedArray = get().OrderedRecipesArray
            const filteredItems = myOrderedArray.filter((item)=>item.slug !== slug)
            set({OrderedRecipesArray:filteredItems})
            toast.error('Recipe Removed From Cart...🥺🥺🥺')
        },

        handleClear(){
            console.log("button clicked");
            set({OrderedRecipesArray:[]})
        },

        handleQuantityIncrement:(slug)=>{
            const myOrderedArray = get().OrderedRecipesArray
            const findRecipeItemInMyOrderedArray = myOrderedArray.find((item)=> item.slug === slug)
            if(findRecipeItemInMyOrderedArray){
                console.log(findRecipeItemInMyOrderedArray);
                findRecipeItemInMyOrderedArray.recipeQuantity += 1;
            }
        },
        handleQuantityDecrement:(slug: string)=>{
            const myOrderedArray = get().OrderedRecipesArray
            const findRecipeItemInMyOrderedArray = myOrderedArray.find((item)=> item.slug === slug)
            if(findRecipeItemInMyOrderedArray){
                findRecipeItemInMyOrderedArray.recipeQuantity -= 1;
            }
        }
        
    }),
    {
        name: "local-storage",
      }
    )
)