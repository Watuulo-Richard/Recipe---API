"use client"
import { motion } from "framer-motion"
import InfiniteLoopCarousel from "./infinite-loop-carousel"
import { CategoryRecipe } from "@prisma/client"

export default function HeroSection({singleFetchedCategory}:{singleFetchedCategory:CategoryRecipe}) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <InfiniteLoopCarousel images={singleFetchedCategory.categoryImages} />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Discover Our Menu Categories</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore a world of flavors with our diverse menu categories. From mouthwatering appetizers to delectable
              main courses and irresistible desserts, we have something for every palate.
            </p>
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

