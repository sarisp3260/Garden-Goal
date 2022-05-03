import React from 'react'

const RegisterForm = () => {
    return (
        <form className='FormularioRegistro m-auto flex flex-col items-center justify-around bg-[#B4A4FC16] w-3/5 h-96 rounded-3xl'>
            <h1 className='text-[#1B2B43]'>Register</h1>
            <input className='font-bold text-[#1b2b4380] text-center w-3/4 rounded-3xl p-2 border-0 bg-[#1b2b431a]' type="text" placeholder='Name'/>
            <input className='font-bold text-[#1b2b4380] text-center w-3/4 rounded-3xl p-2 border-0 bg-[#1b2b431a]' type="text" placeholder='E-mail'/>
            <input className='font-bold text-[#1b2b4380] text-center w-3/4 rounded-3xl p-2 border-0 bg-[#1b2b431a]' type="text" placeholder='Password'/>
            <input className='font-bold text-[#1b2b4380] text-center w-3/4 rounded-3xl p-2 border-0 bg-[#1b2b431a]' type="text" placeholder='Confirm Password'/>
            <button style={{padding: '.3rem 1.5rem .3rem 1.5rem'}} className='font-bold rounded-3xl text-white bg-[#B4A4FC] border-0'>Go {`>>`}</button>
            <b className='text-[#1B2B43]'>Do you have any account?</b>
        </form>
    )
}

export default RegisterForm