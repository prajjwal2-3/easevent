import { Category } from "@/constants/data";
import cat1 from "../../public/category1.svg";
import cat2 from "../../public/category2.svg";
import cat3 from "../../public/category3.svg";
import perso from '../../public/perso.svg';
import cat4 from "../../public/category4.svg";
import cat5 from "../../public/category5.svg";
import { Calendar } from "lucide-react";
import cta from '../../public/cta.svg'
import cat6 from "../../public/category6.svg";
import ion from '../../public/ion_ticket.svg'
import Image from "next/image";
import CategoryForm from "../category/CreateCategory";
import { getAllEvents } from "@/lib/actions/events.action";
import { getCategorybyId } from "@/lib/actions/category.actions";
import EventCard from "../events/EventCard";

export default async function Landingpage() {
  const events = await getAllEvents();
  const firstSixEvents = events.slice(0, 6);
  async function getCategory(id: number) {
    const category = await getCategorybyId(id);
    return category.name;
  }
  const image = [cat1, cat2, cat3, cat4, cat5, cat6];


  return (
    <div className="h-full w-full">
      <div className="h-[28rem] w-full relative">
        <div className="absolute w-full h-[28rem] bg-black/30 flex justify-center items-center">
          <p className="text-white text-5xl p-5 xl:p-0 font-semibold">
            Don't Miss Out! <br />
            <span>
              Explore the{" "}
              <span className="text-yellow-400">vibrant events</span> happening
              locally and globally.
            </span>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dzkldv06d/image/upload/v1717355983/pexels-rahulp9800-1652353_vjfuno.jpg"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="xl:p-10 flex flex-col xl:gap-10 w-full">
        <p className="p-10 xl:p-0 text-slate-800 font-medium text-2xl">
          {" "}
          Explore Categories
        </p>

        <section className="flex items-center overflow-x-scroll overflow-y-hidden w-full pt-5">
          {Category.map((e, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-150 min-w-[200px] xl:mx-4"
            >
              <Image
                src={image[index]}
                alt=""
                className="w-40 h-40 rounded-full object-cover"
              />
              <p className="text-slate-800 font-medium">{e.title}</p>
            </div>
          ))}
        </section>
        <p className="p-10 xl:p-0 text-slate-800 font-medium text-2xl">
          {" "}
          Discover best of online events
        </p>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
        {firstSixEvents.map((event, index) => (
          <EventCard key={index} event={event} getCategory={getCategory} />
        ))}
      </div>
      <button className="border-2 flex justify-center items-center mx-auto my-8 sm:my-16 border-slate-600 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 h-12 sm:h-16 rounded-lg">
        <p className="font-semibold text-base sm:text-lg text-slate-600">See More</p>
      </button>
    </section>
      </div>
      <div className='p-10 hidden xl:flex justify-center items-center'>
      
      <Image src={perso} alt="" className=''/>
      <div className='absolute flex flex-col gap-5 justify-center '>
          <p className='text-3xl text-left text-slate-800 font-bold'> Events specially curated for you!</p>
          <p className="text-slate-800 font-semibold">Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
          <button className='bg-[#2B293D] px-4 py-2 w-fit rounded-lg hover:scale-105 duration-75 text-xl text-yellow-400'>Get Started

              {/* <ArrowForwardIcon/> */}
          </button>
      </div>
    
  </div>
  <div className=' xl:flex hidden  justify-center items-center'>
      
    <Image src={cta} alt="" className=''/>
    <div className='absolute flex w-8/12 gap-5 justify-between items-center'>
       <section className="gap-6 flex flex-col">
       <p className='text-3xl text-yellow-400 font-bold'>Create an Event with Easevent!!!</p>
       <p className="text-yellow-400 font-semibold">Got a show, event, activity or a great experience? Partner with us & get listed on Eventify</p>
       </section>
        <button className='bg-yellow-400 gap-4 flex px-4 py-2 rounded-lg hover:scale-105 duration-75 text-xl text-[#2B293D]'>
            <Calendar/>
            Create Event
        </button>
    </div>
  
</div>
    </div>
  );
}
