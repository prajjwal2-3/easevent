'use client'
import uninterested from '../../public/Uninterested.svg'
import useFavEventStore from '@/store/faveventstore'
import interested from '../../public/Interested.svg'
import Image from 'next/image'
export default function Favtoggle({id}:{id:number}) {
    const favstore = useFavEventStore()
    const favEvents = favstore.events
    function handleClick(id:number){
        favEvents.find(e=>e.id===id)?
        favstore.removeFavEvent(id):
        favstore.addFavEvent(id)
       

    }
  return (
    <button className="absolute top-0 right-0 text-white text-xs sm:text-sm font-medium  p-4 " onClick={()=>{
       handleClick(id)
    }}>
        {
            favEvents.find(e=>e.id===id)?
<Image src={interested} alt='' width={30} height={30}/>:
<Image src={uninterested} alt='' width={30} height={30}/>
        }
        
      </button>
  )
}
