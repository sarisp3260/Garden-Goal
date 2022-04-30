import React from 'react'
import plantaSing from '../assets/plantaSingin.svg'
import RegisterForm from '../components/Forms/RegisterForm'
import GGdark from '../assets/GGdark.svg'

export const SignIn = () => {
    return (
        <div className='min-h-screen bg-[#F9F2F5]'>
            <div className='m-auto p-6 w-5/6 flex justify-between items-center'>
                <h1 className='text-5xl font-bold monserrat text-[#1B2B43]'>Garden Goal</h1>
                <button className='btn-purple'>Sing Up</button>
            </div>
            <div className='flex m-auto w-11/12 items-center'>
                <div className='w-2/4'>
                    <RegisterForm/>
                </div>
                <div className='w-2/4'>
                    <img className='w-5/6 m-auto' src={plantaSing} alt="" />
                </div>
            </div>
            <h3 className='w-full text-center absolute bottom-2 text-xl font-bold monserrat text-[#1B2B43]'>© Garden Goal, 2022</h3>
            <div className='absolute right-5 bottom-0'>
                <img src={GGdark} alt="GG" />
            </div>
        </div> 
    )
}

export default SignIn