"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FoodCarouselCard } from "@/components/foodcarouselcard"
import { RecipeProduct } from "@prisma/client"

// const foodItems = [
//   {
//     title: "Tasty Vegetable Salad Healthy Diet",
//     price: 17.99,
//     discount: 20,
//     type: "Veg" as const,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Original Chess Meat Burger With Chips",
//     price: 23.99,
//     type: "Non Veg" as const,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Fresh Orange Juice With Basil Seed",
//     price: 12.99,
//     type: "Veg" as const,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Meat Sushi Maki With Tuna",
//     price: 9.99,
//     type: "Non Veg" as const,
//     discount: 15,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Classic Margherita Pizza",
//     price: 15.99,
//     type: "Veg" as const,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Spicy Chicken Wings",
//     price: 13.99,
//     type: "Non Veg" as const,
//     discount: 10,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Chocolate Brownie Sundae",
//     price: 8.99,
//     type: "Veg" as const,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
//   {
//     title: "Grilled Salmon with Asparagus",
//     price: 25.99,
//     type: "Non Veg" as const,
//     discount: 5,
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//   },
// ]

export function FoodCarousel({fetchedProducts, selectedCategory}:{fetchedProducts:RecipeProduct[]; selectedCategory: string}) { 
  const filteredRecipes = selectedCategory === "All" ? fetchedProducts : fetchedProducts.filter((item) => item.categoryRecipeId === selectedCategory);
  // console.log(fetchedProducts);

  return (
    <div className="">
      {
        // filteredRecipes.map((recipe, index)=>(
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredRecipes.map((recipe, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto sm:basis-auto md:basis-auto lg:basis-auto">
                <FoodCarouselCard recipe = { recipe } />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-200" />
          <CarouselNext className="hidden sm:flex -right-4 bg-white border-gray-200 hover:bg-green-50 hover:border-green-200" />
          </Carousel>
        // ))
      }
    </div>
  )
}

