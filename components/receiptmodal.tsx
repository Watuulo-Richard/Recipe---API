"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Printer} from "lucide-react"
import { motion } from "framer-motion"

interface ReceiptModalProps {
  isOpen: boolean
  onClose: () => void
  orderDetails: {
    tableNumber: string
    customerName: string
    items: Array<{
      title: string
      price: number
      quantity: number
    }>
   
    subTotal: number
    tax: number
    total: number
  }
}

export function ReceiptModal({ isOpen, onClose, orderDetails }: ReceiptModalProps) {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)
    window.print()
    setTimeout(() => {
      setIsPrinting(false)
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="relative p-6">
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-1">CHILI POS</h2>
              <p className="text-sm text-gray-500">Receipt</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Table</span>
                <span>{orderDetails.tableNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Customer</span>
                <span>{orderDetails.customerName}</span>
              </div>
            </div>
            <div className="border-t border-b py-4 mb-4">
              {orderDetails.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  className="flex justify-between mb-2 text-sm"
                >
                  <div>
                    <span>{item.title}</span>
                    <span className="text-gray-500 ml-2">x{item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <div className="flex justify-between mb-1 text-sm">
                <span>Subtotal</span>
                <span>${orderDetails.subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Tax (5%)</span>
                <span>${orderDetails.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-6"
          >
            <Button onClick={handlePrint} className="w-full bg-green-600 hover:bg-green-700" disabled={isPrinting}>
              <Printer className="mr-2 h-4 w-4" />
              {isPrinting ? "Printing..." : "Print Receipt"}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

