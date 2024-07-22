"use client";
import { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Uploadbutton from "../ui/Upload";
import { getAllCategory } from "@/lib/actions/category.actions";
import CategoryForm from "../category/CreateCategory";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import useEventDetailsStore from "@/store/eventDetails";
import PriceForm from "./PriceForm";
import Preview from "./Preview";
import PublishEvent from "./PublishEvent";
export default function CreateEvent() {
  const [pageIndex, setpageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const {eventDetails,setEventDetails}=useEventDetailsStore()
  const [startDate, setStartDate] = useState<Date>();
  const [endDate,setEndDate]=useState<Date>()
  const [categories, setCategories] = useState([
    {
      name: "entertainment",
    },
  ]);
  useEffect(() => {
    async function getAllCateg() {
      const categories = await getAllCategory();
      setCategories(categories);
      console.log(categories);
    }
    getAllCateg();
  }, []);
function handleCategoryChange(value:string){
  setEventDetails({ category: value });
}
  var steps = [
    {
      title: "Edit",
      active: [0, 1, 2, 3].includes(pageIndex),
    },
    {
      title: "Banner",
      active: [1, 2, 3].includes(pageIndex),
    },
    {
      title: "Ticketing",
      active: [2, 3].includes(pageIndex),
    },
    {
      title: "Review",
      active: [3].includes(pageIndex),
    },
  ];
  function handleStateChange(e: { target: { name: any; value: any; }; }){
    const { name, value } = e.target;
    setEventDetails({ [name]: value });
  };
  function handleCalenderChange(type:string,date:Date|undefined){
if(type==='start'){
  setStartDate(date)
  setEventDetails({startDateTime:date})
}else{
  setEndDate(date)
  setEventDetails({endDateTime:date})
}
  }
  function handlePageChange(step: number) {
    if (step === 1) {
      setpageIndex(pageIndex === steps.length-1 ? pageIndex : pageIndex + 1);
    } else {
      setpageIndex(pageIndex === 0 ? pageIndex : pageIndex - 1);
    }
  }

  return (
    <div className="py-10 xl:px-20 px-5 flex flex-col w-full justify-center items-center gap-16">
      <p className="text-3xl text-textbrand w-full text-left font-medium">
        Create a New Event 
      </p>

      <Stepper count={steps} />
      
      <div className={`xl:w-8/12 w-full   border-none shadow-none ${pageIndex===0?'':'hidden'}`}>
        <CardHeader className=" px-0">
          <CardTitle>Event details</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <form>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Event title</Label>
                <Input name="title" value={eventDetails.title} placeholder="Name of your Event" onChange={handleStateChange}/>
              </div>
              <section className="flex w-full items-center justify-between  ">
                <div className="flex flex-col w-8/12 space-y-1.5">
                  <Label htmlFor="framework">Event Category</Label>
                  <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {categories.length > 0 &&
                        categories.map((e) => (
                          <SelectItem key={e.name} value={e.name}>
                            {e.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-5" onClick={() => {}}>
                  <CategoryForm setCategories={setCategories} />
                </div>
              </section>
              <div className="flex flex-row items-center xl:w-8/12  justify-between">
                <section className="flex flex-col gap-1.5">
                <Label htmlFor="name">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[160px] xl:w-[240px] justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Pick Start Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      
                      selected={startDate}
                      onSelect={(date)=>{
                        handleCalenderChange('start',date)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
               
                </section>
                <section className="flex flex-col gap-1.5">
                <Label htmlFor="name">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[160px] xl:w-[240px] justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Pick End Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(date)=>{
                        handleCalenderChange('end',date)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                </section>
              </div>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Location</Label>
              <Input id="venue" name="venue" onChange={handleStateChange} value={eventDetails.venue}  placeholder="Where will your Event take place? (write remote if it is a virtual event)" />
              </div>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Textarea id="venue" name="description" onChange={handleStateChange} value={eventDetails.description} placeholder="Describe what's special about your event & other important details." />
              </div>
            </div>
          </form>
        </CardContent>
      </div>
      <PriceForm pageIndex={pageIndex}/>
      <Uploadbutton pageIndex={pageIndex}/>
      <Preview pageIndex={pageIndex}/>
      <section className="flex w-full items-center justify-between">
        <Button
          onClick={() => {
            handlePageChange(0);
          }}
        >
          Previous Page
        </Button>
        <p className="font-medium text-slate-800">Step {pageIndex+1} of {steps.length}</p>

        {pageIndex === steps.length-1 ? <PublishEvent/>:
        <Button
        onClick={() => {
          handlePageChange(1);
        }}
      >
        Next Page
      </Button>
      }
        
      </section>
    </div>
  );
}
