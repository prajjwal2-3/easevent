'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { signOut } from "next-auth/react"
export default  function ActionSet() {

 const session = useSession()
 const name = session
 
 console.log(name)

  return (
    <div className="flex justify-center items-center h-full gap-6">
     
        <button className="font-medium text-white mx-4">Create Event</button>

<button className="font-medium text-white mx-4" onClick={()=>{
  signOut()
}}>Sign Out</button>

       
      
     
    </div>
  )
}
