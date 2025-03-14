/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from "@/components/ui/button"
import { useOrderState } from "@/store/store"
import { TableRecipe } from "@prisma/client"
import { AnimatePresence, motion } from "framer-motion"
import { Banknote, CreditCard, Edit2, Minus, Plus, Printer, QrCode, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import FormSelectInput from "./form-select-input"
import { ReceiptModal } from "./receiptmodal"
import { Card, CardContent } from "./ui/card"

export function OrderSection({fetchedTableRecipes}:{fetchedTableRecipes: TableRecipe[] }) {
  // console.log(fetchedTableRecipes, "kaboggo");
  const { OrderedRecipesArray, handleRemoveOrder, handleQuantityIncrement, handleQuantityDecrement, handleClear } = useOrderState()

  const orderItems = OrderedRecipesArray
  // console.log(orderItems);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [isReceiptOpen, setIsReceiptOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({})

  // const initialMainCategoryId = initialData?.mainCategoryId;
  // const initialCategory = mainCategories.find((item) => item.value === initialMainCategoryId);
  const [selectedTableRecipe, setSelectedTableRecipe] = useState<any>("")
  const receivedRecipeTables = fetchedTableRecipes.map((tableRecipe) => (
    {
      value : tableRecipe.slug,
      label : tableRecipe.TableTitle
    }
  ))
  const subTotal = orderItems.reduce((total, item) => total + item.recipePrice, 0)
  
  const tax = subTotal * 0.05
  const total = subTotal + tax

  const orderDetails = {
    tableNumber: "4",
    customerName: "Floyd Miles",
    items: orderItems,
    subTotal,
    tax,
    total,
  }

  // Set up image carousel rotation
  useEffect(() => {
    const intervalIds: NodeJS.Timeout[] = []

    orderItems.forEach((item) => {
      const id = setInterval(() => {
        setActiveImageIndex((prev) => ({
          ...prev,
          [item.slug]: prev[item.slug] === 0 ? 1 : 0,
        }))
      }, 3000)
      intervalIds.push(id)
    })

    return () => {
      intervalIds.forEach((id) => clearInterval(id))
    }
  }, [orderItems])

  // Initialize active image index for new items
  useEffect(() => {
    orderItems.forEach((item) => {
      if (activeImageIndex[item.slug] === undefined) {
        setActiveImageIndex((prev) => ({
          ...prev,
          [item.slug]: 0,
        }))
      }
    })
  }, [orderItems])

  function handleIncrement(slug:string){
    handleQuantityIncrement(slug)
  }

  function handleDecrement(slug:string){
    handleQuantityDecrement(slug)
  }

  return (
    <div className="w-full bg-white border-l flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-4 border-b flex justify-between items-center"
      >
        <div>
          <h2 className="text-xl font-bold">Order Section</h2>
          <p className="text-sm text-gray-500">@Desishub</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            className="text-red-500 border-red-200 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear All
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsReceiptOpen(true)}>
            <Printer className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Edit2 className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      <div className="p-4 border-b">
        {/* <div className="flex gap-2">
          {["Dine in", "Take Away", "Delivery"].map((mode, index) => (
            <Button key={mode} variant={index === 0 ? "secondary" : "outline"} className="flex-1 rounded-full">
              {mode}
            </Button>
          ))}
        </div> */}      
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
            <FormSelectInput
              label="Main Categories"
              options={receivedRecipeTables}
              option={selectedTableRecipe}
              setOption={setSelectedTableRecipe}
              toolTipText="Select Table Number"
              href="/dashboard/inventory/main-categories/new"
            />
          </div>
        </CardContent>
      </Card>
      </div>

      <div
        className="flex-1 overflow-auto p-4 custom-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#10b981 #f3f4f6",
        }}
      >
        <AnimatePresence>
          {orderItems.map((orderedrecipe, index) => (
            // console.log(orderedrecipe.recipeQuantity);
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex"
                  animate={{ x: activeImageIndex[orderedrecipe.slug] === 0 ? 0 : "-100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={orderedrecipe.recipeImages || "/placeholder.svg"}
                    alt={orderedrecipe.recipeTitle}
                    className="w-16 h-16 object-cover flex-shrink-0"
                  />
                  <img
                    src={orderedrecipe.recipeImages || "/placeholder.svg?height=64&width=64"}
                    alt={`${orderedrecipe.recipeTitle} alternate`}
                    className="w-16 h-16 object-cover flex-shrink-0"
                  />
                </motion.div>
                <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${activeImageIndex[orderedrecipe.slug] === 0 ? "bg-white" : "bg-white/50"}`}
                  ></span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${activeImageIndex[orderedrecipe.slug] === 1 ? "bg-white" : "bg-white/50"}`}
                  ></span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{orderedrecipe.recipeTitle}</h4>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-green-600 font-bold">${orderedrecipe.recipePrice.toFixed(2)}</span>
                  <div className="flex items-center gap-2">
                    <Button  onClick={() => handleDecrement(orderedrecipe.slug)} variant="outline" size="icon" className="h-6 w-6 rounded-full p-0">
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium">{orderedrecipe.recipeQuantity as number}</span>
                    <Button onClick={()=>handleIncrement(orderedrecipe.slug)} variant="outline" size="icon" className="h-6 w-6 rounded-full p-0">
                      <Plus className="h-3 w-3" />
                    </Button>
                   
                    <Button
                      onClick={() => handleRemoveOrder(orderedrecipe.slug)}
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-red-500 hover:text-red-700 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="border-t p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Sub Total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax 5%</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Amount</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: Banknote, label: "Cash" },
            { icon: CreditCard, label: "Credit/Debit Card" },
            { icon: QrCode, label: "QR Code" },
          ].map((method, index) => (
            <Button
              key={index}
              variant="outline"
              className={`flex flex-col items-center py-2 md:py-4 lg:py-12 ${
                selectedPayment === method.label ? "border-green-500 bg-green-50 text-green-600" : ""
              }`}
              onClick={() => setSelectedPayment(method.label)}
            >
              <method.icon className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 mb-1" />
              <span className="text-xs md:text-sm">{method.label}</span>
            </Button>
          ))}
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">Place Order</Button>
      </div>

      <ReceiptModal isOpen={isReceiptOpen} onClose={() => setIsReceiptOpen(false)} orderDetails={orderDetails as any} />
    </div>
  )
}

