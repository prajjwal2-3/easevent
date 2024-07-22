'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
export default  function ActionSet() {
const path = usePathname()
 const session = useSession()
 const name = session
 
 console.log(name)

  return (
    <div className="flex justify-center items-center h-full gap-6">
     
        <Link href='/createEvent' className="font-medium h-full  flex-col justify-between pt-5 flex  text-white mx-4">
        Create Event
        {path==='/createEvent'?
      <div className="h-1 bg-yellow-400"></div>:''  
      }
        </Link>

<button className="font-medium text-white mx-4" onClick={()=>{
  signOut()
}}>Sign Out</button>

       
      
     
    </div>
  )
}
