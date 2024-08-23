import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-r from-slate-950 to-slate-800 text-slate-400'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 justify-center'c>
            <h2  className=' text-4xl font-semibold border-slate-500 text-center pt-14'>About</h2>
          </div>
            <p className=' text-xl mt-10 '>Hello!! I'm Rakesh Paquirissamy, A passonated Frontend-Developer with over 2+ years of experience in creating User-friendly web applications
               My primary focus is on crafting excemptional user-friendly interfaces using HTML,CSS,JAVA-SCRIPT,TAILWIND,REACT.
               In addition to it i've had a privlage to work in designing tool like Photoshope CS6, Illustrator and Light-room. 
               This combination of development expertise and design sesnsbilty allows me to bridge the gap between design concept and its seamless implementation.
            </p>

             <br />
             <p className='text-xl'>
                Feel free to reach out to me here on below social-media's Let's chat about contribution to your projects
             </p>
             <div className='flex flex-wrap justify-center border-collapse py-20'>
             <div className='rounded-2xl bottom-4 p-4'>
                <a href="https://www.linkedin.com/in/rakesh-rp-932802228"><TiSocialLinkedin className='hover:scale-150 duration-200 hover:text-slate-200 ' /></a>
              </div> 
              <div className='rounded-2xl bottom-4 p-4'>
                <a href="https://www.instagram.com/rakesh_dhishanth?igsh=MTNqOWxodWR2bG84Nw=="><TiSocialInstagram className='hover:scale-150 duration- hover:text-slate-200' /></a>
              </div>
              <div className='rounded-2xl bottom-4 p-4'>
                <a href="https://x.com/DhishanthRd?t=vYaQ1nOp6LaHopjkv8QnSw&s=08"><TiSocialTwitter className='hover:scale-150 duration-200 hover:text-slate-200' /></a>
              </div>
              <div className='rounded-2xl bottom-4 p-4'>
                <a href="https://github.com/Rakesh-Paquirissamy"><FaSquareGithub className=' hover:scale-150 duration-200 hover:text-slate-200' /></a>
              </div> 
             </div>
               
       </div>
    </div>
  )
}

export default About