import useEventDetailsStore from "@/store/eventDetails";
import Image from "next/image";
import ticketdark from "../../public/ticketdark.svg";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "next-auth/react";
import fallback from '../../public/fallback.svg'
export default function Preview({pageIndex}:{
    pageIndex:number
}) {
  const eventdetails = useEventDetailsStore();
  const user = useSession();
  
  return (
    <div className={`min-h-screen h-full w-full ${pageIndex===3?'flex':'hidden'} items-center flex-col gap-5`}>
      <p className="w-full h-full text-left">
        Almost there!! Have a look before publishing your event.
      </p>
      <div className="border-[6px] m-2 xl:m-5 xl:w-11/12 rounded-2xl flex flex-col gap-5 p-2 xl:p-5 min-h-[48rem] h-fit">
        <div className="relative w-full h-48 xl:h-96 mx-auto overflow-hidden rounded-xl">
          <Image
            src={eventdetails.eventDetails.imageUrl}
            layout="fill"
            objectFit="cover"
            alt={fallback}
          />
        </div>
        <p className="text-2xl xl:text-5xl font-extrabold text-slate-800  xl:my-4">
          {eventdetails.eventDetails.title}
        </p>
        <section className="xl:m-2 flex flex-col xl:flex-row justify-between gap-6 w-full">
          <section>
            <p className="text-xl xl:text-2xl font-bold text-slate-800">Date</p>
            <p className="flex gap-2 text-sm xl:text-base">
              <Calendar size={20}  />
             <span className="font-semibold">Start date:</span> {eventdetails.eventDetails.startDateTime.toString().slice(0, 10)}
            </p>
            <p className="flex gap-2 text-sm xl:text-base">
              <Calendar size={20} />
             <span className="font-semibold">End date:</span> {eventdetails.eventDetails.endDateTime.toString().slice(0, 10)}
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
                {eventdetails.eventDetails.isFree
                  ? "Free"
                  : eventdetails.eventDetails.price}{" "}
                INR
              </span>
            </p>
          </section>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Location</p>
          <p className="flex gap-2 text-sm xl:text-base">
            <MapPin size={20} />
            {eventdetails.eventDetails.venue}
          </p>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Hosted by</p>
          <div className="flex gap-2 items-center">
            <Avatar>
              {user.data?.user?.image && (
                <AvatarImage src={user.data?.user?.image} />
              )}
              <AvatarFallback>
                {user.data?.user?.name?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-medium text-base xl:text-lg text-slate-800">{user.data?.user?.name}</p>
          </div>
        </section>
        <section className="xl:m-2">
          <p className="text-xl xl:text-2xl font-bold text-slate-800">Event description</p>
          <p className="flex my-4">
            
            {eventdetails.eventDetails.description}
          </p>
        </section>
      </div>
    </div>
  );
}
