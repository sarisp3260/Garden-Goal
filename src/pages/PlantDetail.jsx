import React from 'react'
import { FaUndoAlt } from "react-icons/fa";
import GGwhite from '../assets/GGwhite.svg'
import plant from '../assets/plantaSingin.svg'

const PlantDetail = () => {
    return (
        <div className='md:flex md:flex-row flex-col w-100 min-h-screen bg-[#B4A4FC]'>
            <div className='flex-col md:w-2/4 w-full'>
                <div className='h-2/4 bg-[#6951EB] rounded-br-3xl'>
                    <div className='p-3'>
                        <button className='btn-purple flex items-center gap-1'>
                            <p>Go back</p><FaUndoAlt/>
                        </button>
                        <div className='bg-[#1B2B43] w-1/4 opacity-100 md:opacity-0 absolute top-0 right-0 rounded-bl-3xl'>
                            <p className='text-center text-white font-bold monserrat p-6'>Rufingus</p>
                        </div>
                        <img className='w-80 m-auto' src={plant} alt="plant" />
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-2 md:pt-16 pt-8'>
                    <p className='monserrat text-[#1B2B43] font-bold'>Level 3</p>
                    <div className='bg-[#6951EB] w-1/4 h-10 rounded-full border-white border-2'></div>
                </div>
            </div>
            <div className='md:w-2/4 w-full'>
                <div className='p-10 monserrat text-[#1B2B43] font-extrabold'>
                    <h1 className='text-center text-3xl'>Story</h1>
                    <p className='pt-5 w-5/6 m-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo 
                        saepe, deserunt accusantium vero optio illum aliquam nihil 
                        sit officia atque cum fuga ab rem est, cupiditate eos ipsam. 
                        Labore, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo 
                        saepe, deserunt accusantium vero optio illum aliquam nihil 
                        sit officia atque cum fuga ab rem est, cupiditate eos ipsam. 
                        Labore, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo 
                        saepe, deserunt accusantium vero optio illum aliquam nihil 
                        sit officia atque cum fuga ab rem est, cupiditate eos ipsam. 
                        Labore, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo 
                        saepe, deserunt accusantium vero optio illum aliquam nihil 
                        sit officia atque cum fuga ab rem est, cupiditate eos ipsam. 
                        Labore, ipsa!
                    </p>
                    <div className='w-full flex pt-7'>
                        <button className='btn-primary m-auto'>View Certification</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#6951EB] w-2/5 opacity-0 md:opacity-100 absolute bottom-0 left-0 rounded-tr-full'>
                    <p className='text-center text-white font-bold monserrat text-6xl p-6'>Rufingus</p>
            </div>
            <div className='w-100'>
                <img className='md:right-1 lg:right-5 m-auto md:absolute md:bottom-0' src={GGwhite} alt="GG" />
            </div>
        </div>
    )
}

export default PlantDetail