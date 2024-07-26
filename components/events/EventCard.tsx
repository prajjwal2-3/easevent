import React from 'react'
import Image from 'next/image'
import ion from '../../public/ion_ticket.svg'
export default function EventCard({ event, getCategory }:{
    event:any,
    getCategory:any
}) {
  return (
    <div className="w-full bg-gray-200 rounded-xl cursor-pointer hover:shadow-lg flex flex-col">
    <section className="relative">
      <p className="absolute bottom-0 left-0 text-white text-xs sm:text-sm font-medium bg-yellow-400 px-2 rounded-tr-lg">
        {getCategory(event.categoryId)}
      </p>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-40 sm:h-48 object-cover object-center rounded-t-xl"
      />
    </section>
    <section className="p-2 flex flex-1">
      <section className="w-1/4 sm:w-2/12 pr-2">
        <p className="text-blue-600 font-bold text-base sm:text-xl text-center">
          {event.startDateTime.toDateString().slice(4, 7)}
        </p>
        <section className="flex justify-center items-center">
          {event.startDateTime.toDateString().slice(8, 10) ===
          event.endDateTime.toDateString().slice(8, 10) ? (
            <p className="text-base sm:text-lg font-bold text-slate-800">
              {event.startDateTime.toDateString().slice(8, 10)}
            </p>
          ) : (
            <>
              <p className="text-base sm:text-lg font-bold text-slate-800">
                {event.startDateTime.toDateString().slice(8, 10)}
              </p>
              <p className="px-1">-</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">
                {event.endDateTime.toDateString().slice(8, 10)}
              </p>
            </>
          )}
        </section>
      </section>
      <section className="w-3/4 sm:w-9/12">
        <p className="text-sm sm:text-lg font-semibold text-slate-800 line-clamp-2">
          {event.title}
        </p>
        <p className="font-medium text-xs truncate text-slate-600 mt-1">
          {event.description}
        </p>
        <p className="font-medium text-xs sm:text-base text-slate-600 mt-1">
          {event.venue}
        </p>
        <p className="font-medium text-xs sm:text-sm flex flex-row items-center gap-2 text-[#5A5A5A] mt-1">
          <Image src={ion} alt="ticket" width={12} height={12} />
          {event.isFree ? (
            <span className="text-green-600">FREE</span>
          ) : (
            <span>{event.price} INR</span>
          )}
        </p>
      </section>
    </section>
  </div>
  )
}
