
import { getServerSession } from "next-auth"
import { GetSessionParams } from "next-auth/react"
export default async function Landingpage() {
  const user = await getServerSession()
  console.log(user?.user?.name)
  return (
    <div className="h-full ">
     <div className='h-[28rem] w-full'>
        <div className="absolute w-full h-[28rem] bg-black/30 flex justify-center items-center">
        <p className='text-white text-5xl p-5 xl:p-0 font-semibold'>Dont Miss Out! <br /> <span className=''> Explore the <span
        className="text-yellow-400"
        >
        vibrant events
          </span> happening locally and globally.</span></p>
        </div>
    <img
      src="https://res.cloudinary.com/dzkldv06d/image/upload/v1717355983/pexels-rahulp9800-1652353_vjfuno.jpg"
      alt=""
      className='object-cover object-center h-full w-full'
    />
  </div>
  {user?.user?.name}
    </div>
  )
}
