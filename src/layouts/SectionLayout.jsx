import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import NavUser from '../components/UserMenu/NavUser'

const SectionLayout = () => {
  return (
    <div className='bg-blueDark flex relative'>
        <div className="w-28 hidden md:flex z-50">
            <Sidebar/>
        </div>
        <div className='w-full flex flex-col items-end'>
            <div className="nav w-full fixed top-0 md:w-11/12 z-40 lg:ml-6">
                <NavUser/>
            </div>
            <div className="min-h-screen h-full w-full pt-16 mt-3">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default SectionLayout