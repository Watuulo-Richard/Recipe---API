"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RecipeProduct } from "@prisma/client"
import { useOrderState } from "@/store/store"
import Link from "next/link"

export function FoodCarouselCard({ recipe }:{ recipe:RecipeProduct }) {

  const { OrderedRecipesArray, handleOrderNow, handleRemoveOrder } = useOrderState()
  const handleAdd = handleOrderNow
const Qty = 1
  function OrderCartFunction(){
    const OrderCartRecipe = {
      slug: recipe.slug,
      recipeImages: recipe.recipeImages[0], // Use the first image
      recipeTitle: recipe.recipeName,
      recipePrice: recipe.recipePrice,
      recipeQuantity: Qty
    }
    handleAdd(OrderCartRecipe)
  }

  const IfRecipeIsInCart = OrderedRecipesArray.find((item)=>item.slug === recipe.slug)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % recipe.recipeImages.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isHovered, recipe.recipeImages.length])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <AnimatePresence mode="wait">
            <Link href={`/recipedetails/${recipe.slug}`}>
              <motion.img
                key={currentImageIndex}
                src={recipe.recipeImages[currentImageIndex]}
                alt={recipe.recipeName}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </AnimatePresence>
          {recipe.recipePrice && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-medium">
              {recipe.recipePrice}% Off
            </div>
          )}
          <div className="absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <Button
              size="icon"
              variant="secondary"
              className={`rounded-full ${isFavorite ? "bg-red-100 text-red-500" : "bg-white"}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              // className={`rounded-full ${isInCart ? "bg-green-100 text-green-500" : "bg-white"}`}
              className="rounded-full bg-white"
              onClick={() => OrderCartFunction()}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium mb-2 line-clamp-2">{recipe.recipeName}</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-green-600 font-bold text-lg">${recipe.recipePrice.toFixed(2)}</span>
            <div className="flex items-center gap-1">
              {/* <span className={`w-2 h-2 rounded-full ${type === "Veg" ? "bg-green-500" : "bg-red-500"}`} /> */}
              {/* <span className="text-xs text-gray-500">{type}</span> */}
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            {/* <div className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={() => handleDecrement(recipe.slug)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
              </motion.div>
              <span className="font-medium min-w-[20px] text-center">{}</span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={() => handleIncrement(recipe.slug)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </motion.div>
            </div> */}
            
            {
              IfRecipeIsInCart?(
                <Button 
                  onClick={()=>handleRemoveOrder(recipe.slug)} className="rounded-full bg-red-600 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full">
                  <Trash2 /> Remove Order
                </Button>
              ):(
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm w-full"
                  onClick={() => OrderCartFunction()}
                >
                  Order Now
                </Button>
              )
            }
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

