import React from 'react'
import planta from '../../assets/plantaLog.svg'
import AuthForm from '../../components/FormLogin/AuthForm'
import GGwhite from '../../assets/GGwhite.svg'
import '../LogIn/LogIn.css'

const LogIn = () => {
    return (
        <div className='flex flex-col justify-around'>
            <div className='m-auto w-5/6 flex justify-between items-center'>
                <h1>Garden Goal</h1>
                <button>Sing Up</button>
            </div>
            <div className='flex m-auto w-11/12 items-center'>
                <img className='w-2/5' src={planta} alt="" />
                <AuthForm/>
            </div>
            <div className='fixed w-3/4 flex justify-around items-center bottom-0 right-0'>
                <h3>© Garden Goal, 2022</h3>
                <img className='w-1/12' src={GGwhite} alt="" />
            </div>
        </div>
    )
}

export default LogIn