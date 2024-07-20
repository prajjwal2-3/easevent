"use client";
import { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { Button } from "../ui/button";
import { categoryList } from "@/lib/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategory } from "@/lib/actions/category.actions";
import CategoryForm from "../category/CreateCategory";
export default function CreateEvent() {
  const [pageIndex, setpageIndex] = useState(0);
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

  function handlePageChange(step: number) {
    if (step === 1) {
      setpageIndex(pageIndex === steps.length ? pageIndex : pageIndex + 1);
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
      <Card className="xl:w-8/12 w-full  border-none shadow-none">
        <CardHeader>
          <CardTitle>Event details</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Event title</Label>
                <Input id="name" placeholder="Name of your Event" />
              </div>
              <section className="flex w-full items-center justify-between  ">
              <div className="flex flex-col w-8/12 space-y-1.5">
                <Label htmlFor="framework">Event Category</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {categories.length > 0 &&
                      categories.map((e) => (
                        <SelectItem key={e.name} value={e.name}>{e.name}</SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            <div className="pt-5" onClick={()=>{

            }}>
            <CategoryForm setCategories={setCategories}/>
            </div>
             
           
              </section>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
      <section className="flex w-full justify-between">
        <Button
          onClick={() => {
            handlePageChange(0);
          }}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => {
            handlePageChange(1);
          }}
        >
          Next Page
        </Button>
      </section>
    </div>
  );
}
