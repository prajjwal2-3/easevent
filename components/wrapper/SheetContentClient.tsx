'use client'

import { usePathname } from "next/navigation"

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Separator } from "../ui/separator"
export default function SheetContentClient() {
    const pathname = usePathname()
    const user = useSession()
    // const [userr,setuser]= useState<string|null|undefined>('')
   console.log( user.status)
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
     <div className="flex flex-col justify-center items-center h-full gap-6">
      {
        user.status==='authenticated'?
        <>
        <button className="font-medium text-black mx-4">Create Event</button>

       <button className="font-medium text-black" onClick={()=>{
        signOut()
      }}>Sign Out</button>
      
      
        </>:
         <Link href='/signin'>
 <button className="font-medium text-black">Login</button>
 </Link>
      }
      
     
    </div>
    </div>
  )
}
