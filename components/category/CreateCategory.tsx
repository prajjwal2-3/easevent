'use client'
import React, { useState } from 'react';
import { addCategory } from '@/lib/actions/category.actions';
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '../ui/card';
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from '../ui/label';


export default function CategoryForm() {
  const [name, setName] = useState('');
  const { toast } = useToast();

  async function onSubmit() {

    
    if (name.trim() === '') {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }

    try {
      await addCategory(name)
      toast({
        title: "Success",
        description: `Category ${name} created successfully`,
        
      });
      setName('');
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to create category ${name}`,
        variant: "destructive",
      });
    }
  }

  return (
    
              <Card className='mx-auto max-w-sm'>
                <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Create a Category</CardTitle>
        <CardDescription>
          If you think your event category does not matches with default category you can create a new category here.
        </CardDescription>
      </CardHeader>
                <CardContent className='space-y-4'>

                <div className="">
                  <Label>Category</Label>
                 <Input 
                  placeholder="Enter category name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={255}
                />
              
       
               </div>
               <Button type="submit" onClick={onSubmit}>Create Category</Button>
                </CardContent>
              </Card>
      
  );
}