import { HashLink } from 'react-router-hash-link'
import plantaSing from '../assets/plantaSingin.svg'
import RegisterForm from '../components/Forms/RegisterForm'
import GGdark from '../assets/GGdark.svg'

export const SignIn = () => {
    return (
        <div className='min-h-screen bg-white'>
            <div className='m-auto p-6 w-5/6 flex justify-between items-center'>
                <HashLink smooth to="/">
                    <h1 className='text-5xl font-bold monserrat text-blueDark'>Garden Goal</h1>
                </HashLink>
                <HashLink smooth to="/login" className="btn-purple duration-300">
                    Log in
                </HashLink>
            </div>
            <div className='flex m-auto w-11/12 items-center'>
                <div className='w-2/4'>
                    <RegisterForm/>
                </div>
                <div className='w-2/4'>
                    <img className='w-5/6 m-auto' src={plantaSing} alt="" />
                </div>
            </div>
            <h3 className='w-full text-center absolute bottom-2 text-xl font-bold monserrat text-blueDark'>© Garden Goal, 2022</h3>
            <div className='absolute right-5 bottom-0'>
                <img src={GGdark} alt="GG" />
            </div>
        </div> 
    )
}

export default SignIn