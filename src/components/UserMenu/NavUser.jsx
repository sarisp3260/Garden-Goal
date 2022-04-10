import React, { useState } from 'react'
import {FaUserCircle,FaAngleDown, FaAngleUp , FaQuestion, FaSignInAlt} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'

const NavUser = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
    <nav className='w-full bg-blueDark text-white py-5 px-5 flex justify-end relative gap-6'>
        <div className="cont-nav flex justify-between items-center w-4/6">
            <h1 className='text-3xl font-bold'>Garden Goal</h1>
            <div className="icons flex">
                <FaUserCircle className='text-4xl'/>
                {open === false ? <FaAngleDown className='text-4xl' onClick={()=> setOpen(!open)}/> : <FaAngleUp  className='text-4xl' onClick={()=> setOpen(!open)}/>}
            </div>
        </div>
    </nav>

    {open && <div className="menu bg-purple/50 w-1/6 absolute right-0 text-white py-5 px-8 flex flex-col gap-5 justify-center items-left rounded-l-lg">
        <div className="profile flex items-center gap-5">   
            <h3 className='text-xl font-semibold'>FarmerName</h3>
            <FaUserCircle className='text-3xl hover:text-yellow-200'/>
        </div>
        <div className="item flex items-center gap-5 hover:text-yellow-200">
            <FaQuestion className='text-3xl'/>
            <span className='text-xl'>Instructions</span>
        </div>
        <div className="item flex items-center gap-5 hover:text-yellow-200">
            <BsGearFill className='text-3xl'/>
            <span className='text-xl'>Configuration</span>
        </div>
        <div className="item flex items-center gap-5 hover:text-yellow-200">
            <FaSignInAlt className='text-3xl'/>
            <span className='text-xl'>Log out</span>
        </div>
    </div>}
    </>
  )
}

export default NavUser