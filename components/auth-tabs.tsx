"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./login-form"
import SignupForm from "./signup-forms"
// import { SmilePlus } from "lucide-react"
// import LoginForm from "./login-form"
// import SignupForm from "./signup-form"

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="w-full md:max-w-4xl md:mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-1/2">
            Login
          </TabsTrigger>
          <TabsTrigger value="signup" className="w-1/2 text-white z-10 md:animate-bounce">
            Sign Up
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="relative w-full h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "login" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "login" ? 50 : -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex"
          >
            {activeTab === "login" ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

