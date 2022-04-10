import React from 'react'
import CopyRight from './CopyRight'

//importación de imagenes
import LogoWhite from '../../assets/Logo/GG-LOGO-LIGHT.png'

function Footer() {
  return (
    <footer className='bg-blueDark'>
        <div className="footer-list text-white grid grid-cols-1 gap-10 place-items-center py-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            <div className="logo">
                <img src={LogoWhite} className='w-36' alt="" />
            </div>
            <div className="item-list ">
                <h2 className='text-xl font-bold sm:text-2xl'>Lorem ipsum dolor</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                </div>
            </div>
            <div className="item-list">
                <h2 className='text-xl font-bold sm:text-2xl'>Lorem ipsum dolor</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                </div>
            </div>
            <div className="item-list">
                <h2 className='text-xl font-bold sm:text-2xl'>Lorem ipsum dolor</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                    <a href="#">Lorem</a>
                </div>
            </div>
         
        </div>
        <CopyRight/>
    </footer>
  )
}

export default Footer