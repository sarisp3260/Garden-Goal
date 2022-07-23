import React from 'react'

const RegisterForm = () => {
    return (
        <form className='FormularioRegistro m-auto flex flex-col py-5 gap-5 items-center justify-around bg-[#B4A4FC16] w-full md:w-3/5 h-auto rounded-3xl'>
            <h1 className='text-blueDark text-xl font-semibold '>Register</h1>

            <div className='flex flex-col gap-5 w-10/12'>
                <input className='input-light' type="text" placeholder='Name'/>
                <input className='input-light' type="text" placeholder='E-mail'/>
                <input className='input-light' type="text" placeholder='Password'/>
                <input className='input-light' type="text" placeholder='Confirm Password'/>
            </div>

            <button className='btn-primary duration-300'>Register</button>
            <b className='text-base text-blueDark text-center hover:opacity-90'>Do you have any account?</b>
        </form>
    )
}

export default RegisterForm