import { Category } from "@/constants/data";
import cat1 from "../../public/category1.svg";
import cat2 from "../../public/category2.svg";
import cat3 from "../../public/category3.svg";
import cat4 from "../../public/category4.svg";
import cat5 from "../../public/category5.svg";
import cat6 from "../../public/category6.svg";
import Image from "next/image";
import CategoryForm from "../category/CreateCategory";

export default async function Landingpage() {
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
      </div>
     
    </div>
  );
}
