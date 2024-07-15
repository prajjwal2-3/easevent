'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function SheetContentClient() {
    const pathname = usePathname()
    let actualroute = pathname==='/'?'/':pathname.slice(1)
    const routes = ['/','Events','About','Contact']
  return (
    <div className="p-5 text-black flex flex-col gap-2">
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
     
    </div>
  )
}
