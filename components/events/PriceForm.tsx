'use client'
import paid from '../../public/paidticket.svg'
import free from '../../public/freeticket.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Input } from '../ui/input'
import useEventDetailsStore from '@/store/eventDetails'
export default function PriceForm({pageIndex}:{
  pageIndex:number
}) {
    const {eventDetails,setEventDetails}=useEventDetailsStore()
    const [isPaid,setIsPaid]=useState(true)
    
   
  return (
    <div className={`mt-5  ${pageIndex===2?'flex':'hidden'} flex-col gap-3 w-full`}>
        <p className="text-2xl font-medium text-textbrand">What type of event are you running?</p>
      <section className="flex flex-row">
      <div onClick={()=>{
        setIsPaid(true)
      }} className= {`h-40 w-5/12 xl:w-3/12 m-4 cursor-pointer rounded-lg border flex flex-col ${isPaid?'bg-slate-100 border-brand':''} items-center justify-center`}>
      <Image src={paid} alt=''width={60} height={60}/>
      <p className='font-medium'>Ticketed Event</p>
      <p className='text-sm m-0.5'>My event requires ticket for entry</p>
      </div>
      <div onClick={()=>{
        setIsPaid(false)
      }} className={`h-40 w-5/12 xl:w-3/12 m-4 cursor-pointer rounded-lg border flex flex-col ${!isPaid?'bg-slate-100 border-brand':''} items-center justify-center`}>
      <Image src={free} alt=''width={60} height={60}/>
      <p className='font-medium'>Free Event</p>
      <p className='text-sm m-0.5'>I'm running a free event</p>
      </div>
     
      </section>
      {isPaid &&
      <section className=''>
        <p className="text-2xl font-medium text-textbrand">What is the price of your ticket?</p>
        <Input placeholder='0.00' className='w-40 m-4' onChange={(e)=>{
            isPaid?setEventDetails({price:e.target.value}):''
        }} ></Input>
      </section>
      }
    </div>
  )
}
