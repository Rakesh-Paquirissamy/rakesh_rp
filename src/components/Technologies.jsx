import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";



const Technologies = () => {
  return (
    <div name='technologies' className='w-full h-screen bg-gradient-to-r content-center from-slate-950 to-slate-800 text-slate-500 pb-24'>
        <h2 className='text-3xl font-semibold border-slate-500 text-center mb-20 '>Technologies</h2>
        <div className='flex flex-wrap item-center justify-center gap-4'>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaHtml5 className='text-5xl text-red-500' />
             </div>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <IoLogoCss3 className='text-5xl text-blue-500'/>
             </div>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <IoLogoJavascript className='text-5xl text-yellow-400' />
             </div>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaReact className='text-5xl text-cyan-600' />
             </div>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssFill className='text-5xl text-cyan-400' />
             </div>
             <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobephotoshop className='text-5xl text-cyan-600' />
             </div>
        </div>
    </div>
  )
}

export default Technologies