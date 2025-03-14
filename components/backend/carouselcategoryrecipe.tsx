"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInterval } from "./use-interval"
// import { useInterval } from "@/hooks/use-interval"

interface CarouselProps {
  images: string[]
}

export function CarouselCategoryRecipe({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, 5000)

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  )
}

