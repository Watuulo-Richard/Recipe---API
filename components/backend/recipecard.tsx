"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Star, Edit2, Trash2 } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { RecipeProduct } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { baseUrl } from "./recipieform"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function RecipeCard({receivedRecipe}:{receivedRecipe:RecipeProduct}) {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  async function handleDelete(slug:string) {
    try {
      const response = await fetch(`${baseUrl}/api/v1/recipeproducts/${slug}`,{
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
        })
      console.log(response)
      if(response.ok) {
        toast.success('Recipe Deleted Successfully!👍🏾👍🏾👍🏾')
        router.refresh()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {receivedRecipe.recipeImages.map((src, index) => (
            <CarouselItem key={index} className="relative">
              <div className="animate-fade-in">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Recipe image ${index + 1}`}
                  className="w-full h-[200px] object-cover"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{receivedRecipe.recipeName}</h2>
            <p className="text-muted-foreground line-clamp-1">
              {receivedRecipe.recipeDescription}
            </p>
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
              <Star
                className={`w-6 h-6 ${
                  rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Link href={`/dashboard/addrecipe/${receivedRecipe.slug}`}>
              <Edit2 className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="text-destructive" onClick={()=>handleDelete(receivedRecipe.slug)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        <Button>View Recipe</Button>
      </CardFooter>
    </Card>
  )
}

