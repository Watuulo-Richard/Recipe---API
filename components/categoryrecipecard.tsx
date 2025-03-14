"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CategoryRecipe } from "@prisma/client"
import Link from "next/link"

export function CategoryCard({ receivedCategory }:{ receivedCategory:CategoryRecipe}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % receivedCategory.categoryImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [receivedCategory.categoryImages.length])
// console.log(receivedCategory.categoryImages, "these are images");
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={receivedCategory.categoryImages[currentImageIndex]}
              alt={receivedCategory.categoryTitle}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1">{receivedCategory.categoryTitle}</h3>
            {/* <p className="text-sm text-white/80">{itemCount} Items</p> */}
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-gray-600 line-clamp-3">{receivedCategory.categoryDescription}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
        <Link className="w-full" href={`/recipecategorydetails/${receivedCategory.slug}`}>
          <Button
            className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors duration-300"
            variant="outline"
          >
              View Products
            
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

