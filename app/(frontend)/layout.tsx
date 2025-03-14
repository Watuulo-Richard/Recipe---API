import FrontSideBar from '@/components/frontsidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

export default function FrontEndDashBoard({children}:{children:ReactNode}) {
  return (
    <SidebarProvider>
      <div className='flex w-full overflow-hidden'>
        <div className="md:w-[20%] md:fixed">
          <FrontSideBar />
        </div>
        <main className=" w-full md:w-[80%] md:ml-[16rem] lg:ml-[19rem]">
          {children}  
        </main>
      </div>
    </SidebarProvider>
  )
}
