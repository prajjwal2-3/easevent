"use client";
import React, { useState } from "react";
import { addCategory } from "@/lib/actions/category.actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "../ui/label";

export default function CategoryForm({setCategories}:{
  setCategories:React.Dispatch<React.SetStateAction<{ name: string; }[]>>
}) {
  const [name, setName] = useState("");
  const { toast } = useToast();

  async function onSubmit() {
    if (name.trim() === "") {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }

    try {
      await addCategory(name);
      toast({
        title: "Success",
        description: `Category ${name} created successfully`,
      });
      setName("");
      setCategories(e=>[...e,{name:name}])
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to create category ${name}`,
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            If you think your event category is not listed here, You can add it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col  gap-4">
            <Label htmlFor="name" className="text-left">
              Category
            </Label>
            <Input
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={255}
            />
          </div>
        </div>
        <DialogFooter className="">
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={onSubmit}>
            Create Category
          </Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
