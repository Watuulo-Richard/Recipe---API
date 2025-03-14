"use client"

import { motion } from "framer-motion"
import { Footer } from "./footer"
import RecipeGrid from "./recipe-grid"
import type { CategoryRecipe } from "@prisma/client"
import HeroCarousel from "./hero-carousel"

export default function CategoryPage({ singleFetchedCategory }: { singleFetchedCategory: CategoryRecipe }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Banner Section with Parallax Effect */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <HeroCarousel singleFetchedCategory = { singleFetchedCategory }/>

        {/* Wave Divider */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div> */}
      </div>

      {/* Recipe Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="relative">
                  Popular Recipes
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary/60"></span>
                </span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Explore our most loved recipes from this category, perfect for any occasion.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Sort by: Newest</option>
                <option>Sort by: Popular</option>
                <option>Sort by: Quick Prep</option>
              </select>
            </div>
          </div>

          <RecipeGrid />

          {/* View More Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 font-medium">
              View More Recipes
            </button>
          </div>
        </main>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest recipes and cooking tips from {singleFetchedCategory.categoryTitle}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

