'use client'
import { useState } from "react";
import Stepper from "./Stepper";
import { Button } from "../ui/button";

export default function CreateEvent() {
  const [pageIndex,setpageIndex]=useState(0)
  var steps= [{
    title:'Edit',
    active:[0,1,2,3].includes(pageIndex)
},
{
    title:'Banner',
    active:[1,2,3].includes(pageIndex)
},
{
    title:'Ticketing',
    active:[2,3].includes(pageIndex)
},
{
    title:'Review',
    active:[3].includes(pageIndex)
}]
  
function handlePageChange(step:number){
if(step===1){
  setpageIndex(pageIndex===steps.length?pageIndex:pageIndex+1)
}else{
  setpageIndex(pageIndex===0?pageIndex:pageIndex-1)
}
}
  return (
    <div className="p-10">
      <p className="text-3xl text-textbrand font-medium">Create a New Event</p>
      <section className="m-14 p-10">
      <Stepper count={steps}/>
      </section>
      <section className="flex justify-between">
       
        
     <Button onClick={()=>{
      handlePageChange(0)
     }}>Previous Page</Button>
      {pageIndex}
     <Button onClick={()=>{
      handlePageChange(1)
     }}>Next Page</Button>
     </section>
    </div>
  )
}
