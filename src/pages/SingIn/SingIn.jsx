import React from 'react'
import plantaSing from '../../assets/plantaSingin.svg'
import RegisterForm from '../../components/FormRegister/RegisterForm'
import GGdark from '../../assets/GGdark.svg'
import '../SingIn/SingIn.css'

export const SingIn = () => {
    return (
        <div className='flex flex-col justify-around'>
            <div className='m-auto w-5/6 flex justify-between items-center'>
                <h1>Garden Goal</h1>
                <button>Log in</button>
            </div>
            <div className='flex m-auto w-11/12 items-center'>
                <img className='w-2/5' src={plantaSing} alt="" />
                <RegisterForm/>
            </div>
            <div className='fixed w-3/4 flex justify-around items-center bottom-0 right-0'>
                <h3>© Garden Goal, 2022</h3>
                <img className='w-1/12' src={GGdark} alt="" />
            </div>
        </div>
    )
}

export default SingIn