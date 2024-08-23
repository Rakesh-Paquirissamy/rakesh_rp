import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-gradient-to-r from-slate-950 to-slate-800 p-3 text-slate-500'> 
        <div className='flex flex-col p-3 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-7'>
                <p className='text-3xl font-semibold border-slate-600 text-center mb-4 mt-4'>Contact</p>
                <p className='text-xl font-semibold border-slate-600 text-center mb-4'>Let's get connected</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/axojlxjb" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-slate-500 focus:outline-none' />
                    <input type="email" name="email" placeholder='Enter your Email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-slate-500 focus:outline-none' />
                    <textarea name="message" rows="10" placeholder='Enter your Message' className=' p-2 bg-transparent border-2 rounded-md text-slate-500 focus:outline-none'></textarea>
                    <button className='text-white bg-slate-700  py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact