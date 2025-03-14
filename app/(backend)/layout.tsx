
import SideBar from '@/components/backend/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { authOptions } from '@/config/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function DashboardLayout({children}:{children:ReactNode}) {
  const Auth = await getServerSession(authOptions)
  if(!Auth) {
    redirect("/auth-page")
  }
  return (
    <SidebarProvider>
      <div className='flex w-full overflow-hidden'>
        <div className="md:w-[30%] md:fixed">
          <SideBar/>
        </div>
        <main className=" w-full md:w-[70%] md:ml-[16rem] lg:ml-[28rem]">
          {children}  
        </main>
      </div>
    </SidebarProvider>
  )
}
