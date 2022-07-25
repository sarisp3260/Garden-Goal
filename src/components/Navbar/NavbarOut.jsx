import React, { useState } from 'react'
import {HiX, HiMenuAlt4} from 'react-icons/hi'

const NavbarOut = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className='fixed top-0 w-full flex items-center justify-between px-5 py-5 bg-white/40 backdrop-blur-2xl sm:px-10 z-50'>
            <h1 className='text-xl font-bold md:text-3xl'>Garden Goal</h1>
            <div className='space-x-10 text-lg font-light font-montserrat hidden md:block'>
                <a href="!#">Welcome</a>
                <a href="!#">Home</a>
                <a href="!#">More</a>
            </div>
            <div className='space-x-5 hidden md:block'>
                <button className='btn-purple'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>

            <div className='block bg-blueDark rounded-lg p-2 text-white md:hidden' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX className='text-xl'/> : <HiMenuAlt4 className='text-xl'/>}
            </div>

        </div>

        {isOpen && (
        
        <div className='fixed top-16 left-0 w-full  bg-white/40 backdrop-blur-2xl flex flex-col justify-center items-center gap-4 p-5 md:hidden z-50'>
    
            <a href="!#">Welcome</a>
            <a href="!#">Home</a>
            <a href="!#">More</a>

            <div className='space-x-3'> 
                <button className='btn-purple'>Login</button>
                <button className='btn-dark'>Sign Up</button> 
            </div>

        </div>)}
    </>
  )
}

export default NavbarOut