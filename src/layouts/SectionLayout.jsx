import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import NavUser from '../components/UserMenu/NavUser'

const SectionLayout = () => {
  return (
    <div className='bg-blueDark flex items-start relative'>
        <div className="hidden md:flex fixed top-0 z-50">
            <Sidebar/>
        </div>
        <div className='w-full flex flex-col items-end'>
            <div className="nav w-full fixed top-0 lg:left-20 md:w-11/12 z-40 lg:ml-6">
                <NavUser/>
            </div>
            <div className="min-h-screen h-full w-full md:w-10/12 lg:w-11/12 px-6 pt-16 mt-3">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default SectionLayout