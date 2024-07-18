import ticket from "../../public/ticket.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavigationSet from "./NavigationSet";
import ActionSet from "./ActionSet";
import SheetContentClient from "./SheetContentClient";

export default async function Header() {

  return (
    <div className=" xl:px-16  bg-brand fixed z-10 w-full justify-between flex">
      <section className="flex py-4 ml-12 justify-center items-center w-2/12 ">
        <Image src={ticket} alt="" width={40} height={55} />
        <p className="font-bold text-xl text-yellow-400">Easevent </p>
      </section>
      <section className="w-7/12 hidden xl:flex justify-around ">
        <NavigationSet />
      </section>
      <section className="w-3/12 hidden xl:flex">
        <ActionSet />
      </section>
      <Sheet>
        <SheetTrigger asChild className="m-2 xl:hidden cursor-pointer">
          <Menu className="text-white m-5 " />
        </SheetTrigger>
        <SheetContent className="w-7/12">
          <SheetContentClient />
        </SheetContent>
      </Sheet>
    </div>
  );
}
