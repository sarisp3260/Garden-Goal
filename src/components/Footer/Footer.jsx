import React from 'react'
import CopyRight from './CopyRight'

//importación de imagenes
import LogoWhite from '../../assets/Logo/GG-LOGO-LIGHT.png'

function Footer() {
  return (
    <footer className='bg-blueDark px-5 md:px-10'>
        <div className="footer-list text-white flex flex-wrap items-center justify-center gap-5 md:justify-between py-8">
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