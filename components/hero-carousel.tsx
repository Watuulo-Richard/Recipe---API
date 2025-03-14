"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CategoryRecipe } from "@prisma/client"
import { AnimatedTooltipPreview } from "./animated-tooltip"

// Sample carousel images - replace with your actual images
// const carouselImages = [
//   {
//     src: "/placeholder.svg?height=600&width=1200",
//     alt: "Modern living room with beige sofas and glass coffee table",
//   },
//   {
//     src: "/placeholder.svg?height=600&width=1200",
//     alt: "Contemporary bedroom design with neutral colors",
//   },
//   {
//     src: "/placeholder.svg?height=600&width=1200",
//     alt: "Minimalist kitchen with marble countertops",
//   },
// ]

export default function HeroCarousel({singleFetchedCategory}:{singleFetchedCategory:CategoryRecipe}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === singleFetchedCategory.categoryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? singleFetchedCategory.categoryImages.length - 1 : prevIndex - 1))
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex, clearInterval])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setIsAutoPlaying(true)
  }

  return (
    <section className="w-full bg-background py-4 md:py-6 md:pt-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold">
            {/* <span className="text-primary">Explore</span> <span className="text-muted-foreground">Our Handpicked</span>{" "} */}
            <span className="text-primary">{singleFetchedCategory.categoryTitle}</span>
          </h1>

          <div className="flex items-center gap-2">
            <div className="">
                <AnimatedTooltipPreview/>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Input type="email" placeholder="ENTER EMAIL" className="h-9 w-full max-w-[200px] bg-background" />
              <Button className="h-9 bg-black text-white hover:bg-gray-800">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        <div
          className="relative w-full rounded-lg overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            {singleFetchedCategory.categoryImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full",
                )}
              >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="absolute bottom-10 right-10 text-white text-7xl md:text-9xl font-bold opacity-20 z-10">
                  Classic
                </div>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Shopping button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <Button className="bg-black/80 text-white rounded-full px-6 py-2 hover:bg-black flex items-center gap-2 backdrop-blur-sm">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <User2 className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">START SHOPPING</span>
              </Button>
            </div>

            {/* Navigation buttons - only visible on hover */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-between px-4 z-20 transition-opacity duration-300",
                isHovering ? "opacity-100" : "opacity-0",
              )}
            >
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-black/50 border-none text-white backdrop-blur-sm hover:bg-black/70"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-black/50 border-none text-white backdrop-blur-sm hover:bg-black/70"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {singleFetchedCategory.categoryImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50",
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

