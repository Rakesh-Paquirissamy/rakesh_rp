import React from 'react'
//import { TbCircleArrowRightFilled } from "react-icons/tb";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import resume from '../resume.pdf'

const Home = () => {
  return (
    <div name="home"className='h-auto md:h-screen w-full flex bg-gradient-to-r from-slate-950 to-slate-800'>
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full  '>
         <h2 className='text-3xl sm:text-4xl mt-11 text-bold text-slate-400'>Hi There <br /> I'm Rakesh paquririssamy</h2>
         <p  className='text-slate-400 text-base py-4  max-w-md'>I have 2+ years of experience in building robust web application with Technologies like React.JS, Tailwind, JAVA, PL/SQL, Tableau......</p>
         <div>
          <button className=' group text-slate-800 w-fit px-2 py-1 my-2 flex flex-row text-center rounded-md bg-gradient-to-r from-slate-400 to-gray-600 hover:text-slate-200 '>
          <a href={resume} download='resume'className='flex'>
            Download-CV <span className='  px-2 py-1 group-hover:rotate-90 duration-300 '><FaArrowRightFromBracket /></span>
          </a> 
          </button>       
         </div>
        </div>
        <div className=' px-11 justify-center mr-9'>
           <img src="./assets/Hero.png" alt='my profle' className='  max-w-60 md:max-w-64 rounded-2xl  mx-9 w-full mt-2 mb-2 justify-center'/>
          </div>
      </div>
    </div>
  )
}

export default Home