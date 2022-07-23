import React from 'react'

const AuthForm = () => {
    return (
        <form className='m-auto h-auto flex flex-col gap-5 py-5 items-center justify-around bg-[#B4A4FC16] w-full md:w-3/5 rounded-3xl'>
            <h1 className='text-white text-xl font-semibold'>Log in</h1>
            
            <div className='flex flex-col gap-5 w-10/12'>
                <input className='input-border' type="text" placeholder='Username'/>
                <input className='input-border' type="text" placeholder='Password'/>
            </div>

            <button className='btn-white text-black hover:bg-white/70 hover:text-black'>Go {`>>`}</button>
            <b className='text-white text-center'>Forgot your password?</b>
        </form>
    )
}

export default AuthForm