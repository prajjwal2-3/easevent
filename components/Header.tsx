import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <header className="shadow-xl p-5 flex bg-blue-500 justify-between items-center">
      <section className="w-2/12">
        <span className="font-bold text-yellow-400">EASEVENT</span>
      </section>
      <section className="w-4/12 justify-between sm:flex hidden">
        <button>Home</button>
        <button>Events</button>
        <button>About</button>
        <button>Contact</button>
      </section>
      <section className="w-3/12 items-center flex justify-center">
        <button className="sm:flex hidden bg-yellow-400 hover:bg-yellow-500 p-2 rounded-xl">
          Create Event
        </button>
      </section>
      <section className="block sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white p-10 ">
            <div className="flex flex-col gap-5  items-start">
              <button>Home</button>
              <button>Events</button>
              <button>About</button>
              <button>Contact</button>
              <button>Create Event</button>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );
};

export default Header;
