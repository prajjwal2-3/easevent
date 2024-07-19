import React from 'react'
type CountItem = {
    title: string;
    active: boolean;
  };
  
  type StepperProps = {
    count: CountItem[];
  };
export default function Stepper({ count }: StepperProps) {
 
  return (
   <>
   <div className="flex w-full ">
   
   {
    count.length>0?
    count.map((e,index)=>(
           
        <section key={index} className='flex flex-grow relative items-center'>
           <div className={`h-[2px] w-6/12 ${e.active?'bg-brand':'bg-black/20'}`}></div>
           <div className={`w-3 h-3 border-[3px] ${e.active?'border-brand':'border-black/20'}  rounded-full`}></div>
           <section className={`absolute pt-16 w-full flex justify-center items-center `}>
              <p className= {`font-medium ${e.active?'text-black':'text-black/20'}`}>{e.title}</p>
           </section>
           <div className={`h-[2px] w-6/12 ${e.active?'bg-brand':'bg-black/20'}`}></div>
        </section>
      
      )):''
    
        
       
   }
      </div>     

   </>
  )
}
