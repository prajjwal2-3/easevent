import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='text-white font-semibold text-5xl flex justify-center items-center'>
       
        <div className="w-full h-[30rem] bg-black/50 absolute"></div>
        <div className="absolute">
            Do not miss out! <br/> Explore the <span className='text-yellow-400'>vibrant Events</span> happening locally and globally.
        </div>
      <img
       src='https://res.cloudinary.com/dzkldv06d/image/upload/v1717355983/pexels-rahulp9800-1652353_vjfuno.jpg'
       alt=''
       className='w-full h-[30rem] object-cover'
       />
    </div>
  )
}

export default Hero
