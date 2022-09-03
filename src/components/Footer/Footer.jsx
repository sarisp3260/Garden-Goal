import React from 'react'
import CopyRight from './CopyRight'

//importación de imagenes
import LogoWhite from '../../assets/Logo/GG-LOGO-LIGHT.png'

function Footer() {
  return (
    <footer className='bg-blueDark px-5 md:px-10'>
        <div className="footer-list text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center place-items-center gap-5 py-8">
            <div className="logo px-5">
                <img src={LogoWhite} className='w-40 hover:animate-pulse duration-300' alt="" />
            </div>
            <div className="item-list ">
                <h2 className='text-xl font-bold sm:text-2xl'>Design</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="#" className='hover:text-purple'>Figma</a>
                    <a href="#" className='hover:text-purple'>Ilustrations</a>
                    <a href="#" className='hover:text-purple'>More about</a>
                </div>
            </div>
            <div className="item-list">
                <h2 className='text-xl font-bold sm:text-2xl'>Documentation</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="#" className='hover:text-purple'>Frontend docs</a>
                    <a href="https://gg-rest-api.herokuapp.com/docs" className='hover:text-purple'>Api docs</a>
                </div>
            </div>
            <div className="item-list">
                <h2 className='text-xl font-bold sm:text-2xl'>Educamás</h2>
                <div className="list flex flex-col text-lg sm:text-xl">
                    <a href="https://educamas.com.co/programate/#queesprogramate" className='hover:text-purple'>Prográmate</a>
                    <a href="#" className='hover:text-purple'>Hacer alianza</a>
                </div>
            </div>

         
        </div>
        <CopyRight/>
    </footer>
  )
}

export default Footer