"use client"

import { motion } from "framer-motion"
import RecipeCard from "./recipe-card"
// import RecipeCard from "./recipe-card"

const recipes = [
  {
    id: 1,
    title: "Vegetable Pasta",
    image: "/placeholder.svg?height=300&width=400&text=Vegetable+Pasta",
    category: "Main Course",
    rating: 4.5,
    price: 12.99,
  },
  {
    id: 2,
    title: "Grilled Salmon",
    image: "/placeholder.svg?height=300&width=400&text=Grilled+Salmon",
    category: "Seafood",
    rating: 4.8,
    price: 18.99,
  },
  {
    id: 3,
    title: "Caesar Salad",
    image: "/placeholder.svg?height=300&width=400&text=Caesar+Salad",
    category: "Salads",
    rating: 4.2,
    price: 9.99,
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    image: "/placeholder.svg?height=300&width=400&text=Chocolate+Lava+Cake",
    category: "Desserts",
    rating: 4.9,
    price: 7.99,
  },
  {
    id: 5,
    title: "Margherita Pizza",
    image: "/placeholder.svg?height=300&width=400&text=Margherita+Pizza",
    category: "Pizza",
    rating: 4.6,
    price: 14.99,
  },
  {
    id: 6,
    title: "Beef Burger",
    image: "/placeholder.svg?height=300&width=400&text=Beef+Burger",
    category: "Burgers",
    rating: 4.4,
    price: 11.99,
  },
]

export default function RecipeGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe, index) => (
        <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <RecipeCard {...recipe} />
        </motion.div>
      ))}
    </div>
  )
}

