import React from 'react'
import GG from '../../assets/GGwhite2.svg'
import friends from '../../assets/friends.svg'
import collection from '../../assets/collection.svg'
import store from '../../assets/store.svg'
import rewards from '../../assets/rewards.svg'
import '../sidebar/Sidebar.css'

const Sidebar = () => {
    return (
        <div className='bg-purple h-screen w-28 flex flex-col justify-between items-center'>
            <div className='flex flex-col items-center justify-between hover:bg-primary hover:scale-125  hover:outline-4 hover:border-white'>
                <img className='w-9/12' src={GG} alt="" />
                <p className='font-montserrat text-white'>Home</p>
            </div>
            <div className='flex flex-col items-center justify-between hover:bg-primary hover:scale-125  hover:outline-4 hover:border-white'>
                <img className='w-9/12' src={friends} alt="" />
                <p className='font-montserrat text-white'>Friends</p>
            </div>
            <div className='flex flex-col items-center justify-between hover:bg-primary hover:scale-125  hover:outline-4 hover:border-white'>
                <img className='w-9/12' src={collection} alt="" />
                <p className='font-montserrat text-white'>Collection</p>
            </div>
            <div className='flex flex-col items-center justify-between hover:bg-primary hover:scale-125  hover:outline-4 hover:border-white'>
                <img className='w-9/12' src={store} alt="" />
                <p className='font-montserrat text-white'>Store</p>
            </div>
            <div className='flex flex-col items-center justify-between hover:bg-primary hover:scale-125  hover:outline-4 hover:outline hover:outline-white'>
                <img className='w-9/12' src={rewards} alt="" />
                <p className='font-montserrat text-white'>Rewards</p>
            </div>
        </div>
    )
}

export default Sidebar