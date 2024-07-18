'use client'

import { usePathname } from "next/navigation"


import Link from "next/link"
import { Separator } from "../ui/separator"
import {  signOut, useSession } from "next-auth/react"
import { Button } from "../ui/button"
export default function SheetContentClient() {
    const pathname = usePathname()
   const user = useSession()
    let actualroute = pathname==='/'?'/':pathname.slice(1)
    const routes = ['/','Events','About','Contact']
  return (
    <div className=" text-black flex flex-col gap-2">
      <p className="text-3xl font-semibold text-slate-800">Easevent</p>
      <Separator/>
     {routes.map((e)=>( 
      <>
      <Link href={e.toLowerCase()}>{e==='/'?'Home':e}</Link>
      {
        actualroute===e.toLowerCase()?
        <div 
        className="h-1 w-16 bg-yellow-400"></div>:''
       }
      
      </>
     ))}
     <Button>
      Create Event
     </Button>
    <Button onClick={()=>{
      signOut()
    }}>
      Sign Out
    </Button>
    </div>
  )
}
