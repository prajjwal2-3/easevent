'use client'
import { useState } from "react"
import { getCategoryByName } from "@/lib/actions/category.actions"
import useEventDetailsStore from "@/store/eventDetails"
import { useSession } from "next-auth/react"
import { getUserByEmail } from "@/lib/actions/user.actions"
import { createEvent } from "@/lib/actions/events.action"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
export default function PublishEvent() {
    const {toast} = useToast()
    const {eventDetails,setEventDetails}=useEventDetailsStore()
    const user = useSession()
   async function publishEvent(){
    console.log('publish event function called')
        try{
            const category = await getCategoryByName(eventDetails.category)
        const userData = await getUserByEmail(user.data?.user?.email)
        const data = {
            title:eventDetails.title,
            description:eventDetails.description,
            imageUrl:eventDetails.imageUrl,
            startDateTime:eventDetails.startDateTime,
            endDateTime:eventDetails.endDateTime,
            price:eventDetails.price,
            isFree:eventDetails.isFree,
            url:eventDetails.imageUrl,
            venue:eventDetails.venue,
            categoryId:category.id,
            authorId:userData.id     
           }
        console.log(data)
        await createEvent({
          ...data,
          price: eventDetails.price || "",
          isFree: eventDetails.isFree || true
        });
        setEventDetails({title:'',description:'',imageUrl:'',startDateTime:new Date,endDateTime:new Date,price:'',isFree:true,url:'',venue:'',category:'',authorId:0});

        }catch(err){
            toast({
                title: "Error",
                description: `Failed to create event. ${err}`,
                variant: "destructive",
              });
        }
   }
  return (
    <div>
      <Button onClick={publishEvent}>
        Publish Event
      </Button>
    </div>
  )
}
