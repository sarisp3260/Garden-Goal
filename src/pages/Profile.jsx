import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const Profile = () => {
  return (
    <div className='bg-blueDark min-h-screen text-white px-10 md:px-20'>
        <h1 className='text-3xl font-bold py-3'>Profile configuration</h1>
        <div className='line w-full h-1 rounded-full bg-white'></div>
        <div className="cont-profile py-5">
            <form className='grid grid-cols-1 md:grid-cols-2 place-items-center' action="">
                <div className="user-info">
                    <h2 className="lable-form">Name</h2>
                    <div className="img-user w-max p-3 relative">
                        <FaUserCircle className='text-9xl'/>
                        <button className="bg-white/40 text-white py-2 px-4 rounded-full font-semibold text-md absolute bottom-0 right-1 hover:bg-white hover:text-blueDark">Edit</button>
                    </div>
                    <div className="apps text-red-600 pt-8 flex items-center gap-5">
                        <SiCodewars className='text-4xl'/>
                        <button className='hover:bg-slate-300 hover:text-primary btn-white w-max'>Link account</button>
                    </div>
                </div>
                <div className="form-user mt-10 w-full flex flex-col gap-7 md:mt-0">

                    <label htmlFor="">
                        <h2 className="lable-form">Nick Name</h2>
                        <input className="input-white" type="text" placeholder='Farmer name' />
                    </label>
                    <label htmlFor="">
                        <h2 className="lable-form">Full Name</h2>
                        <input className="input-white" type="text" placeholder='Name' />
                    </label>
                    <label htmlFor="">
                        <h2 className="lable-form">Email</h2>
                        <input className="input-white" type="email" placeholder='Email@GG.com' />
                    </label>
                    <label htmlFor="">
                        <h2 className="lable-form">Password</h2>
                        <input className="input-white" type="password" placeholder='************' />
                    </label>
                    <label htmlFor="">
                        <h2 className="lable-form">Confirm password</h2>
                        <input className="input-white" type="password" placeholder='************' />
                    </label>
                </div>

                <button className='mt-10 hover:bg-slate-300 hover:text-primary btn-white w-max md:mt-0'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default Profile