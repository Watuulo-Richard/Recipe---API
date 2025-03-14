"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Share2, Clock, Users, ChefHat, Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import ImageCarousel from "./details-image-recipe-carousel"
import { RecipeProduct } from "@prisma/client"
// import ImageCarousel from "./image-carousel"

const recipe = {
  id: "vegetable-pasta",
  title: "Vegetable Pasta with Fresh Herbs",
  subtitle: "Italian-inspired healthy dish",
  rating: 4.8,
  reviews: 157,
  price: "$12.99",
  originalPrice: "$18.99",
  discount: "Save 30% right now",
  prepTime: "25 mins",
  cookTime: "15 mins",
  servings: 4,
  difficulty: "Medium",
  features: ["Made with fresh organic vegetables", "Gluten-free pasta option available", "Chef-approved recipe"],
  images: [
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ],
  ingredients: [
    "8 oz pasta",
    "2 cups mixed vegetables",
    "3 cloves garlic, minced",
    "1/4 cup olive oil",
    "Fresh herbs",
    "Salt and pepper",
  ],
  instructions: [
    "Boil pasta according to package instructions",
    "Sauté vegetables in olive oil",
    "Mix pasta and vegetables",
    "Season and serve",
  ],
}

export default function RecipeDetail({SingleRecipe}:{SingleRecipe:RecipeProduct | null}) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/recipes" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Recipes
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <ImageCarousel images={SingleRecipe?.recipeImages as string[]} autoPlayInterval={5000} />
        </motion.div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{SingleRecipe?.recipeName}</h1>
                <p className="text-gray-600 mt-2">{SingleRecipe?.recipeDescription}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`transition-all duration-300 ${isFavorite ? "bg-red-50 text-red-500 border-red-200" : ""}`}
                >
                  <Heart className={isFavorite ? "fill-red-500" : ""} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 />
                </Button>
              </div>
            </div>

            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(recipe.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                {recipe.rating} ({recipe.reviews} reviews)
              </span>
            </div>

            <div className="mt-6">
              <span className="text-3xl font-bold text-green-600">{SingleRecipe?.recipePrice}</span>
              <span className="ml-2 text-gray-500 line-through">{recipe.originalPrice}</span>
              <Badge variant="outline" className="ml-3 bg-green-50 text-green-700">
                {recipe.discount}
              </Badge>
            </div>

            {/* Recipe details grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-xl">
                <Clock className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Prep Time</div>
                <div className="font-medium">{recipe.prepTime}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <Users className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Servings</div>
                <div className="font-medium">{recipe.servings}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <ChefHat className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="font-medium">{recipe.difficulty}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <Clock className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Cook Time</div>
                <div className="font-medium">{recipe.cookTime}</div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recipe content */}
            <div className="mt-8">
              <Tabs defaultValue="ingredients">
                <TabsList>
                  <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                  <TabsTrigger value="instructions">Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="ingredients">
                  <ul className="list-disc pl-5 space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="instructions">
                  <ol className="list-decimal pl-5 space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

