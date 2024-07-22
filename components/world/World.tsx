import Image from 'next/image'
import React from 'react'
import lg from '../../assets/images/p1.png'
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

const World = () => {
  return (
    <div className="flex justify-between max-md:flex-col gap-4 my-4">
        <div className="max-md:w-full w-4/6 flex flex-col gap-1 bg-slate-100 px-2 py-2">
          <div className="border-[1px] bg-sky-600 flex justify-between items-center text-white">
            <p className="px-2 py-2">World</p>
            <div className="flex gap-2">
              <p className="px-2 py-2">All</p>
              <p className="px-2 py-2">Select</p>
            </div>
          </div>

          <div className="w-full flex gap-2">
            <div className="w-full grid gap-4 max-sm:grid-cols-2 sm:grid-cols-3">
           <div className="flex flex-col gap-1 w-full">
            <Image src={lg} height={150} width={150} alt="o" className="w-full"/>
            <p className="text-xl font-semibold">Oromia Region</p>
            <p className="max-w-[200px] text-[14px]">The Oromo remained independent until the last quarter of the 19th...</p>
            <p>By Admin</p>
           </div>

           <div className="flex flex-col gap-1 full">
            <Image src={lg} height={150} width={150} alt="o" className="w-full"/>
            <p className="text-xl font-semibold">Oromia Region</p>
            <p className="max-w-[200px] text-[14px]">The Oromo remained independent until the last quarter of the 19th...</p>
            <p>By Admin</p>
           </div>

           <div className="flex flex-col gap-1 w-full">
            <Image src={lg} height={150} width={150} alt="o" className="w-full"/>
            <p className="text-xl font-semibold">Oromia Region</p>
            <p className="max-w-[200px] text-[14px]">The Oromo remained independent until the last quarter of the 19th...</p>
            <p>By Admin</p>
           </div>
           </div>
           </div>
        </div>

        {/* Right Part */}
        <div className="max-md:w-full w-2/6  flex flex-col gap-2 bg-slate-100 px-2 py-2">
        <h1 className="font-bold max-md:my-4">Popular News releated to World</h1>

        <div className="grid gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
        <div className="flex gap-2">
          <Image src={lg} height={100} width={100} alt="o" className="object-cover"/>
          <p className="hover:text-sky-600 cursor-pointer">The Oromo remained independent until the last quarter of the 19th</p>
        </div>

        <div className="flex gap-2">
          <Image src={lg} height={100} width={100} alt="o" className="object-cover"/>
          <p className="hover:text-sky-600 cursor-pointer">The Oromo remained independent until the last quarter of the 19th</p>
        </div>

        <div className="flex gap-2">
          <Image src={lg} height={100} width={100} alt="o" className="object-cover"/>
          <p className="hover:text-sky-600 cursor-pointer">The Oromo remained independent until the last quarter of the 19th</p>
        </div>

        <div className="flex gap-2">
          <Image src={lg} height={100} width={100} alt="o" className="object-cover"/>
          <p className="hover:text-sky-600 cursor-pointer">The Oromo remained independent until the last quarter of the 19th</p>
        </div>

      
        </div>

        </div>
      </div>
  )
}

export default World
