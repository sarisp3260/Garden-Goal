import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const Profile = () => {
    const styles = 'bg-purple/50 text-white py-2 px-4 rounded-full'
    const h2style = 'pb-2 text-xl font-semi-bold md:text-2xl'
  return (
    <div className='bg-blueDark h-screen text-white px-20'>
        <h1 className='text-3xl font-bold py-3'>Profile configuration</h1>
        <div className='line w-full h-1 rounded-full bg-white'></div>
        <div className="cont-profile py-5">
            <form className='grid grid-cols-2' action="">
                <div className="user-info">
                    <h2 className={`${h2style}`}>Name</h2>
                    <div className="img-user w-max p-3 relative">
                        <FaUserCircle className='text-9xl'/>
                        <button className={`py-1 ${styles} text-md absolute bottom-0 right-1 hover:bg-white hover:text-blueDark`}>Edit</button>
                    </div>
                    <div className="apps text-red-600 pt-8 flex items-center gap-5">
                        <SiCodewars className='text-4xl'/>
                        <button className='hover:bg-slate-300 hover:text-primary btn-white w-max'>Link account</button>
                    </div>
                </div>
                <div className="form-user flex flex-col gap-7">

                    <label htmlFor="">
                        <h2 className={`${h2style}`}>Nick Name</h2>
                        <input className={`${styles} w-4/6`} type="text" placeholder='Farmer name' />
                    </label>
                    <label htmlFor="">
                        <h2 className={`${h2style}`}>Full Name</h2>
                        <input className={`${styles} w-4/6`} type="text" placeholder='Name' />
                    </label>
                    <label htmlFor="">
                        <h2 className={`${h2style}`}>Email</h2>
                        <input className={`${styles} w-4/6`} type="email" placeholder='Email@GG.com' />
                    </label>
                    <label htmlFor="">
                        <h2 className={`${h2style}`}>Password</h2>
                        <input className={`${styles} w-4/6`} type="password" placeholder='************' />
                    </label>
                    <label htmlFor="">
                        <h2 className={`${h2style}`}>Confirm password</h2>
                        <input className={`${styles} w-4/6`} type="password" placeholder='************' />
                    </label>
                </div>

                <button className='hover:bg-slate-300 hover:text-primary btn-white w-max'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default Profile