import { Link } from 'react-router-dom'
import planta from '../assets/plantaLog.svg'
import AuthForm from '../components/Forms/AuthForm'
import GGwhite from '../assets/GGwhite.svg'

const LogIn = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-blueDark'>
            <div className='p-6 flex justify-between items-center'>
                <Link smooth to="/">
                    <h1 className='text-2xl font-bold monserrat text-white md:text-5xl'>Garden Goal</h1>
                </Link>
                <Link smooth to="/signup" className="btn-white duration-300 hover:bg-primary">
                    Sign up
                </Link>
            </div>
            <div className='flex flex-col m-auto w-11/12 items-center md:flex-row gap-10 md:gap-0'>
                <div className='w-full md:w-2/4'>
                    <img className='w-3/12 md:w-5/12 m-auto' src={planta} alt="" />
                </div>
                <div className='w-full md:w-2/4'>
                    <AuthForm/>
                </div>
            </div>
            <h3 className='w-full text-center text-xl p-6 font-bold monserrat text-white'>© Garden Goal, 2022</h3>
            <div className='hidden xs:block absolute right-5 bottom-0'>
                <img src={GGwhite} alt="GG" className='w-10/12'/>
            </div>
        </div>        
    )
}

export default LogIn