"use client";
 
import { useState } from "react";
import { UploadDropzone } from "./uploadthing";
import useEventDetailsStore from "@/store/eventDetails";
import { useToast } from "./use-toast";
export default function Uploadbutton({pageIndex}:{
  pageIndex:number
}) {
    const {setEventDetails}=useEventDetailsStore()
    const [uploaded,setUploaded]=useState('')
    const {toast} = useToast()
  return (
    <main className={`${pageIndex===1?'flex flex-col':'hidden'}`}>
      <UploadDropzone
       className="bg-brand ut-label:text-lg ut-label:text-white ut-button:bg-yellow-400 ut-button:text-black ut-button:font-medium ut-allowed-content:ut-uploading:text-red-300"
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
            toast({
                title: "Success",
                description: `Image uploaded successfully`,
              });
          setEventDetails({imageUrl:res[0].url})
          setUploaded(res[0].name)
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <p className="w-full text-center text-black/60 text-xl my-5 font-medium">
        Uploaded File: {"  "}
    
     {uploaded}
     
      </p>
    </main>
  );
}