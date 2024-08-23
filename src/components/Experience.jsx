import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-gradient-to-r from-slate-950 to-slate-800 text-slate-500 content-center'>
       <h2 className='text-3xl font-semibold border-slate-500 text-center mb-20 '>Experience</h2> 
       <div className='mb-8 flex flex-wrap lg:justify-center ml-5'>
         <div className='w-full lg:w-1/4'>
           <p className='mb-2 text-start text-slate-600 font-bold'>2022 - Present</p>
         </div>
         <div className='w-full max-w-xl lg:w-3/4 '>
           <h6 className='mb-2 font-bold'>
            Frontend Developer <span className='text-sm font-semibold'>- Tata consultacy services</span>
           </h6> 
           <p className=' mb-4 font-semibold'>
            Contributed to developement of web application using javascript, React.js and Tailwind. Managed database and implemented data-storage solutions. Worked closely with product managers to priortize features and enhancement.
           </p>
           <span className='mr-2 mt-4 rounded bg-slate-800 px-2 font-semibold'>
            HTML 
           </span>
           <span className='mr-2 mt-4 rounded bg-slate-800 px-2 font-semibold'>
            CSS 
           </span>
           <span className='mr-2 mt-4 rounded bg-slate-800 px-2 font-semibold'>
            JAVASCRIPT
           </span>
           <span className='mr-2 mt-4 rounded bg-slate-800 px-2 font-semibold'>
            REACTJS 
           </span>
           <span className='mr-2 mt-4 rounded bg-slate-800 px-2 font-semibold'>
            TAILWIND
           </span>
         </div>
       </div>
    </div>
  )
}

export default Experience