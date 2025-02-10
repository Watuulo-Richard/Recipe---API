
import SideBar from '@/components/backend/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

export default function DashboardLayout({children}:{children:ReactNode}) {
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
