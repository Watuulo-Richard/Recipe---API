"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface RecipeCardProps {
  title: string
  image: string
  category: string
  rating: number
  price: number
}

export default function RecipeCard({ title, image, category, rating, price }: RecipeCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-[4/3]">
        <Image width={400} height={400} src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  )
}

