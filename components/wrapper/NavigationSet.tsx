'use client'
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
import Link from "next/link"
export default function NavigationSet() {
const pathname = usePathname()
let actualroute = pathname==='/'?'/':pathname.slice(1)
const route = ['/','/Events','/About','/Contact']
  return (
   <div className="flex gap-14 h-full">
  {
    route.map((e)=>(
        <div key={e} className="flex flex-col h-full  justify-between">
        <Link href={e.toLowerCase()} className="font-medium text-white text-lg pt-5">{e==='/'?'Home':e.slice(1)}</Link>
       {
        actualroute===e.toLowerCase()?
        <motion.div 
        layoutId="header-active-link"
        className="h-1 bg-yellow-400"></motion.div>:''
       }
       {}
        </div>
    ))
  }
  
   </div>
  )
}
