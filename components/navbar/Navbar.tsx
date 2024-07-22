"use client"
import { links } from '@/data/data';
import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [active,setActive] = useState('Home')
    const [nav,setNav]  = useState(false)
   
  return (
    <header className='fixed top-0 w-full h-[100px] shadow-sm bg-white z-50'>
      <nav className='relative max-w-[1400px] mx-auto h-full flex justify-between items-center'>
        <div className='flex items-center gap-4 lg:gap-10'>
        <h1 className=' md:text-2xl font-semibold'>Siltie FM</h1>
        <div className='hidden sm:flex gap-3 text-slate-600'>
            {links.map((link)=>(
                <Link key={link.name} href={link.to} className={`${active===link.name?'text-slate-800 border-b-[1px] border-slate-500':''}hover:text-slate-800 hover:border-b-[1px] border-slate-500`} onClick={()=>setActive(link.name)}>{link.name}</Link>
            ))}
       
        </div>
        </div>
        <div className='flex items-center gap-2'>
        <button className='text-white bg-sky-600 hover:bg-sky-900/90 px-3 py-1 rounded-md'>
            Login
        </button>
        <div className='block md:hidden' onClick={()=>setNav(!nav)}>
            {nav?<button><IoMdClose className='w-10 h-10'/></button>: 
             <button><CiMenuBurger className='w-10 h-10'/></button>}
           
        </div>
        </div>
        <div className={`absolute top-0 ${nav?'right-0':'right-[-100%] tran'} w-[70%] min-h-[100vh] flex flex-col gap-6 justify-center items-center bg-slate-100 tran -z-30 md:hidden `}>
        {links.map((link)=>(
                <Link key={link.name} href={link.to} className={`${active===link.name?'text-slate-800 border-b-[1px] border-slate-500':''}hover:text-slate-800 hover:border-b-[1px] border-slate-500`} onClick={()=>setActive(link.name)}>{link.name}</Link>
            ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
