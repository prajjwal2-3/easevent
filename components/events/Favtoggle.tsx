"use client";

import Image from "next/image";
import uninterested from "../../public/Uninterested.svg";
import interested from "../../public/Interested.svg";
import useFavEventStore from "@/store/faveventstore";

interface FavtoggleProps {
  id: number;
  className?: string;
}

export default function Favtoggle({ id, className = "" }: FavtoggleProps) {
  const favstore = useFavEventStore();
  const favEvents = favstore.events;

  function handleClick(id: number) {
    favEvents.find((e) => e.id === id)
      ? favstore.removeFavEvent(id)
      : favstore.addFavEvent(id);
  }

  return (
    <button
      className={`absolute top-0 right-0  ${className}`}
      onClick={() => {
        handleClick(id);
      }}
    >
      {favEvents.find((e) => e.id === id) ? (
        <Image src={interested} alt="" width={30} height={30} />
      ) : (
        <Image src={uninterested} alt="" width={30} height={30} />
      )}
    </button>
  );
}