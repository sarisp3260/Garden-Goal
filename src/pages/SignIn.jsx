import { HashLink } from 'react-router-hash-link'
import plantaSing from '../assets/plantaSingin.svg'
import RegisterForm from '../components/Forms/RegisterForm'
import GGdark from '../assets/GGdark.svg'

export const SignIn = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-white'>
            <div className='p-6 flex justify-between items-center'>
                <HashLink smooth to="/">
                    <h1 className='text-2xl font-bold monserrat text-blueDark md:text-5xl'>Garden Goal</h1>
                </HashLink>
                <HashLink smooth to="/login" className="btn-purple duration-300">
                    Log in
                </HashLink>
            </div>
            <div className='flex flex-col m-auto w-11/12 items-center md:flex-row gap-10 md:gap-0'>
                <div className='w-full md:w-2/4'>
                    <RegisterForm/>
                </div>
                <div className='w-full md:w-2/4 first-letter: order-first md:order-none'>
                    <img className='w-5/6 m-auto' src={plantaSing} alt="" />
                </div>
            </div>
            <h3 className='w-full text-center py-6 text-xl font-bold monserrat text-blueDark'>© Garden Goal, 2022</h3>
            <div className='hidden xs:block absolute right-5 bottom-0'>
                <img src={GGdark} alt="GG" />
            </div>
        </div> 
    )
}

export default SignIn