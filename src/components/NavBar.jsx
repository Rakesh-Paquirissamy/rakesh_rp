import React, { useState } from 'react';
import {FaBars, FaTimes}from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
           id : 1,
           link : "home",
        },
        {
            id : 2,
            link : "about",
        },
        {
            id : 3,
            link : "technologies",
        },
        {
            id : 4,
            link : "experience",
        },
        {
            id : 5,
            link : "contact",
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-10  text-yellow-50 fixed bg-gradient-to-r from-slate-950 to-slate-800'>
        <div className='flex justify-between items-center'>
            <img src="./assets/logo.png" className= 'h-9 mt-2 mb-2  ' alt='logo'/>
            <h1 className='font-semibold text-lg text-gray-300 cursor-pointer hover:scale-105 duration-200'>Rakesh PAQUIRISSAMY</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li 
              key={id} 
              className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 hover:text-slate-200 text-base'>
              <Link to = {link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>

        <div  onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-1 text-gray-400 md:hidden'>
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>

        {nav &&(
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-950 text-gray-400'>
        {links.map(({ id, link }) => (
            <li 
              key={id} className='px-4 cursor-pointer capitalize py-6 text-xl'>
                <Link onClick={()=> setNav(!nav)} to = {link} smooth duration={500} >{link}</Link>
            </li>
            ))}
        </ul>
        ) }
    </div>
  )
}

export default NavBar