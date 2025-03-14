"use client"

import { Grid} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { CategoryRecipe } from "@prisma/client"
import Image from "next/image"

// const categories = [
//   { icon: Grid, label: "All", items: "235 Items" },
//   { icon: Coffee, label: "Breakfast", items: "19 Items" },
//   { icon: Soup, label: "Soups", items: "8 Items" },
//   { icon: UtensilsCrossed, label: "Pasta", items: "14 Items" },
//   { icon: ChefHat, label: "Main Course", items: "27 Items" },
//   { icon: Sandwich, label: "Burges", items: "13 Items" },
// ]

export function CategoryFilter({selectedCategory, onSelectedCategory, fetchedCategories}:{selectedCategory:string, onSelectedCategory:(category: string) => void; fetchedCategories:CategoryRecipe[]}) {
 
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative py-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4 basis-28 sm:basis-32 md:basis-36">
          <button onClick={() => onSelectedCategory("All")}
            className={cn(
              "flex flex-col items-center justify-center p-3 rounded-xl w-full h-24 sm:h-28 md:h-32 transition-all duration-200 border hover:border-green-200 hover:shadow-sm",
                  selectedCategory===
                  'All'
                    ? "bg-green-50 text-green-600 border-green-200"
                    : "bg-white hover:bg-green-50/50",
            )}>
            <div className="flex flex-col justify-center items-center">
              <Grid className="h-12 w-12 mb-1" />
              All Recipes
            </div>
          </button>
        </CarouselItem>
          {fetchedCategories.map((category, index) => (
            <CarouselItem key={index} className="relative pl-2 md:pl-4 basis-28 sm:basis-32 md:basis-36">
            <button
              onClick={() => onSelectedCategory(category.id)}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-xl w-full h-24 sm:h-28 md:h-32 transition-all duration-200 border hover:border-green-200 hover:shadow-sm relative overflow-hidden",
                category.id === selectedCategory
                  ? "border-green-200"
                  : "",
              )}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image src={category.categoryImages[0] || "/placeholder.svg"} alt="" height={500} width={300} className="w-full h-full object-cover" />
              </div>
              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-all duration-300"></div>
              {/* <category.categoryImages  /> */}
              <span className="text-white text-xs font-semibold relative z-10">{category.categoryTitle}</span>
              {/* <span className="text-xs text-gray-500">{category.items}</span> */}
            </button>
          </CarouselItem>
          ))}
        </CarouselContent>
        <div className={cn("transition-opacity duration-300", isHovered ? "opacity-100" : "opacity-0")}>
          <CarouselPrevious className="hidden sm:flex -left-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-200" />
          <CarouselNext className="hidden sm:flex -right-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-200" />
        </div>
      </Carousel>
    </div>
  )
}

