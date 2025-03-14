// "use client"

// import { motion } from "framer-motion"
// import { CategoryCard } from "./categoryrecipecard"
// import { CategoryRecipe } from "@prisma/client"
// // import { CategoryCard } from "./category-card"

// const categories = [
//   {
//     title: "Breakfast Specials",
//     description:
//       "Start your day with our delicious breakfast options. From classic eggs benedict to healthy smoothie bowls, we have something for everyone.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 19,
//   },
//   {
//     title: "Fresh Salads",
//     description:
//       "Explore our range of fresh and healthy salads. Made with locally sourced ingredients and homemade dressings for the perfect healthy meal.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 12,
//   },
//   {
//     title: "Gourmet Burgers",
//     description:
//       "Indulge in our selection of handcrafted burgers. Using premium ingredients and unique flavor combinations for the ultimate burger experience.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 15,
//   },
//   {
//     title: "Pasta & Risotto",
//     description:
//       "Authentic Italian pasta and risotto dishes. Made with traditional recipes and the finest ingredients for a true taste of Italy.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 14,
//   },
//   {
//     title: "Asian Fusion",
//     description:
//       "Experience the perfect blend of Asian flavors. Our fusion dishes combine traditional recipes with modern culinary techniques.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 18,
//   },
//   {
//     title: "Fresh Seafood",
//     description:
//       "Daily fresh seafood selections. From grilled fish to seafood platters, enjoy the taste of the ocean at its finest.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 16,
//   },
//   {
//     title: "Vegetarian Delights",
//     description:
//       "Creative and flavorful vegetarian dishes. Proving that vegetarian food can be both healthy and incredibly delicious.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 20,
//   },
//   {
//     title: "Grilled Specialties",
//     description:
//       "Premium cuts of meat grilled to perfection. Our grilled dishes are served with carefully selected sides and house-made sauces.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 13,
//   },
//   {
//     title: "Artisan Pizza",
//     description:
//       "Wood-fired pizzas with artisanal toppings. Our pizzas combine traditional Italian methods with creative modern ingredients.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 11,
//   },
//   {
//     title: "Desserts",
//     description:
//       "Indulgent desserts for the perfect finish. From classic favorites to innovative sweet creations by our pastry chefs.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 17,
//   },
//   {
//     title: "Beverages",
//     description:
//       "Refreshing drinks and craft cocktails. Our beverage menu includes everything from fresh juices to signature cocktails.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 22,
//   },
//   {
//     title: "Chef's Specials",
//     description:
//       "Unique dishes crafted by our executive chef. These rotating specials showcase seasonal ingredients and creative culinary techniques.",
//     images: [
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     itemCount: 8,
//   },
// ]

// export function CategorySection({receivedCategories}:{receivedCategories:CategoryRecipe[]}) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
//       {receivedCategories.map((category, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <CategoryCard receivedCategory={category} />
//         </motion.div>
//       ))}
//     </div>
//   )
// }

