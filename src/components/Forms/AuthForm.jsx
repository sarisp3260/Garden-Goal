import React from 'react'

const AuthForm = () => {
    return (
        <form style={{height: '40vh'}} className='m-auto flex flex-col items-center justify-around bg-[#B4A4FC16] w-3/5 rounded-3xl'>
            <h1 className='text-white'>Log in</h1>
            <input className='text-white text-center w-9/12 rounded-3xl p-2 border-0 bg-[#ffffff20]' type="text" placeholder='Username'/>
            <input className='text-white text-center w-9/12 rounded-3xl p-2 border-0 bg-[#ffffff20]' type="text" placeholder='Password'/>
            <button style={{padding: '.3rem 1.5rem .3rem 1.5rem'}} className='rounded-3xl text-[#1B2B43] bg-white border-0'>Go {`>>`}</button>
            <b className='text-white'>Forgot your password?</b>
        </form>
    )
}

export default AuthForm