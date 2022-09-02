import React, { useState, useEffect } from 'react'
import { FaUserCircle, FaAngleDown, FaAngleUp, FaBars } from 'react-icons/fa'

import ItemNav from './ItemNav'
import { Link, useLocation } from 'react-router-dom'


const NavUser = () => {

    const [open, setOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location]);
    

    return (
        <>
            <nav className='w-full bg-blueDark text-white py-5 px-5 flex justify-end relative gap-6 select-none'>
                <div className="cont-nav flex justify-between items-center w-full md:w-4/6">

                    <Link smooth to="/">
                        <h1 className='text-3xl font-bold'>Garden Goal</h1>
                    </Link>

                    <div className="hidden icons md:flex">
                        <FaUserCircle className='text-4xl' />
                        {open === false ? <FaAngleDown className='text-4xl' onClick={() => setOpen(!open)} /> : <FaAngleUp className='text-4xl' onClick={() => setOpen(!open)} />}
                    </div>
                    <FaBars className='flex text-4xl md:hidden' onClick={() => setOpen(!open)} />
                </div>
            </nav>

            {open &&

                <>
                    <div className="menu hidden bg-white w-fit h-fit absolute top-20 right-0 text-blueDark py-5 px-8 flex-col gap-5 justify-center items-start z-20 rounded-l-lg lg:items-start md:flex">
                        <ItemNav />
                    </div>

                    <div className="menu bg-white w-3/4 h-fit absolute top-20 right-0 text-blueDark py-5 px-8 flex flex-col gap-5 justify-center items-start z-20 rounded-l-lg md:hidden">
                        <ItemNav responsive="show" />
                    </div>
                </>

            }


        </>
    )
}

export default NavUser