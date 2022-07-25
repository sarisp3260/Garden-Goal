import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Clouds from '../../assets/Landing/Clouds.svg'
import Waterman from '../../assets/Landing/Waterman.svg'
import {MdDoubleArrow} from 'react-icons/md'

const Welcome = () => {
  return (
    <div className='relative bg-white select-none'>
        <MainLayout>

            <div className='flex flex-col gap-5 items-center justify-center'>

                <h1 className='font-bold text-5xl lg:text-8xl'>Wellcome</h1>
                <img className='w-24 md:w-32' src={Waterman} alt="" />

            </div>

        </MainLayout>

        <img className='absolute bottom-0 w-full' src={Clouds} alt="" />
        <div className='animate-pulse'>
            <MdDoubleArrow className="text-4xl text-primary rotate-90 absolute bottom-10 inset-x-[48%] z-50"/>
        </div>
    </div>
  )
}

export default Welcome