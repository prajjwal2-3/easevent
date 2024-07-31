import { getEventbyId } from "@/lib/actions/events.action";
import React from 'react';
import ticketdark from '../../../public/ticketdark.svg'
import Image from "next/image";
import { Calendar,MapPin } from 'lucide-react';
import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar";
import { getCategorybyId } from "@/lib/actions/category.actions";
import { getUserById } from "@/lib/actions/user.actions";
import Favtoggle from "@/components/events/Favtoggle";
type params={
id:number
}
export default async function EventPage({ params }:{params:params}) {
  console.log(params)
  const event = await getEventbyId(Number(params.id));
  const category = await getCategorybyId(event.categoryId)
  const author = await getUserById(event.authorId)
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-[6px] m-2 xl:m-5 xl:w-8/12 max-w-2xl rounded-2xl flex flex-col  gap-5 p-2 xl:p-5 min-h-[48rem] h-fit">
        <div className="relative w-full h-48 xl:h-96 mx-auto overflow-hidden rounded-xl">
          <Image
            src={event.imageUrl}
            layout="fill"
            objectFit="cover"
            alt={'not ound'}
          />
        </div>
        <section className="w-full flex">
        <p className="text-2xl xl:text-5xl w-11/12 font-extrabold text-slate-800  xl:my-4">
          {event.title}
        </p>
        <section className="w-1/12 relative ">
<Favtoggle id={event.id} className={'bg-slate-800 rounded-full xl:my-4'}/>
        </section>
        </section>
        <section className="xl:m-2 flex flex-col xl:flex-row justify-between gap-6 w-full">
          <section>
            <p className="text-xl xl:text-2xl font-bold text-slate-800">Date</p>
            <p className="flex gap-2 text-sm xl:text-base">
              <Calendar size={20}  />
             <span className="font-semibold">Start date:</span> {event.startDateTime.toString().slice(0, 10)}
            </p>
            <p className="flex gap-2 text-sm xl:text-base">
              <Calendar size={20} />
             <span className="font-semibold">End date:</span> {event.endDateTime.toString().slice(0, 10)}
            </p>
          </section>
          <section className="flex flex-col">
            <p className="text-xl xl:text-2xl font-bold text-slate-800">
              Ticket Information
            </p>
            <p className="flex gap-1 items-center text-sm xl:text-base">
              <Image src={ticketdark} alt="" width={20} />
              <span className="font-medium text-slate-800 xl:text-lg">
                Ticket type:
              </span>
              <span className="font-medium text-slate-600 xl:text-lg">
                {event.isFree
                  ? "Free"
                  : event.price}{" "}
                INR
              </span>
            </p>
          </section>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Location</p>
          <p className="flex gap-2 text-sm xl:text-base">
            <MapPin size={20} />
            {event.venue}
          </p>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Hosted by</p>
          <div className="flex gap-2 items-center">
            <Avatar>
              {author.photo && (
                <AvatarImage src={author.photo} />
              )}
              <AvatarFallback>
                {author.firstName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-medium text-base xl:text-lg text-slate-800">{author.username}</p>
          </div>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Event description</p>
          <p className="flex my-4">
            
            {event.description}
          </p>
        </section>
      </div>
    </div>
  );
}