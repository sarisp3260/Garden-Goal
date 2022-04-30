import React from 'react'
import planta from '../assets/plantaLog.svg'
import AuthForm from '../components/Forms/AuthForm'
import GGwhite from '../assets/GGwhite.svg'

const LogIn = () => {
    return (
        <div className='min-h-screen bg-[#1B2B43]'>
            <div className='m-auto p-6 w-5/6 flex justify-between items-center'>
                <h1 className='text-5xl font-bold monserrat text-white'>Garden Goal</h1>
                <button className='btn-white'>Sing Up</button>
            </div>
            <div className='flex m-auto w-11/12 items-center'>
                <div className='w-2/4'>
                    <img className='w-5/12 m-auto' src={planta} alt="" />
                </div>
                <div className='w-2/4'>
                    <AuthForm/>
                </div>
            </div>
            <h3 className='w-full text-center absolute bottom-2 text-xl font-bold monserrat text-white'>© Garden Goal, 2022</h3>
            <div className='absolute right-5 bottom-0'>
                <img src={GGwhite} alt="GG" />
            </div>
        </div>        
    )
}

export default LogIn