import { getAllEvents } from "@/lib/actions/events.action";
import { getCategorybyId } from "@/lib/actions/category.actions";
import EventCard from "./EventCard";
export default async function EventsPage() {
    const events = await getAllEvents();
    
    async function getCategory(id: number) {
        const category = await getCategorybyId(id);
        return category.name;
      }
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
        {events.map((event, index) => (
          <EventCard key={index} event={event} getCategory={getCategory} />
        ))}
      </div>
      
    </section>
  )
}
