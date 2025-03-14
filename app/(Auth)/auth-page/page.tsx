// import AuthTabs from "./auth-tabs"

import AuthTabs from "@/components/auth-tabs";

export default function page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 md:px-24 bg-gray-100">
      <AuthTabs />
    </main>
  )
}

