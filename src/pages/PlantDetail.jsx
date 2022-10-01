import React, { useState, useEffect } from 'react'
import { FaUndoAlt } from "react-icons/fa";
import GGwhite from '../assets/GGwhite.svg'
import plant from '../assets/plantaSingin.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { plantsList } from '../components/Garden/plants';

const PlantDetail = () => {

    const navigate = useNavigate();
    const params = useParams()

    const [filtered, setFiltered] = useState({})

    useEffect(() => {
        setFiltered(plantsList.filter((item)=>{
            return item.name == params.id
        }))
    }, []);

    return (
        <div className='md:flex md:flex-row flex-col w-100 min-h-screen bg-[#B4A4FC]'>
            <div className='flex-col md:w-2/4 w-full'>
                <div className='h-2/4 bg-primary rounded-br-3xl'>
                    <div className='p-3'>
                        <button onClick={()=>{
                            navigate(-1)
                        }}
                        className='btn-purple flex items-center gap-1'>
                            <p>Go back</p><FaUndoAlt/>
                        </button>
                        <div className='bg-blueDark w-2/4 opacity-100 md:opacity-0 absolute top-0 right-0 rounded-bl-3xl'>
                            <p className='text-center text-white font-bold monserrat p-3'>{filtered[0]?.name}</p>
                        </div>
                        <img className='w-32 m-auto' src={filtered[0]?.image} alt="plant" />
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-2 md:pt-16 pt-8'>
                    <p className='monserrat text-blueDark font-bold'>Level {filtered[0]?.level}</p>
                    <div className='bg-blueDark w-1/4 h-10 rounded-full border-white border-4 relative'>
                        <div className={`bg-primary h-8 rounded-full absolute top-0 ${filtered[0]?.level === 1 ? "w-1/4": filtered[0]?.level === 2 ? "w-1/2" :"w-full"}`}></div>
                    </div>
                </div>
            </div>
            <div className='md:w-2/4 w-full h-fit md:min-h-screen'>
                <div className='p-10 monserrat h-full text-blueDark'>
                    <div>
                        <h1 className='text-center text-3xl font-extrabold'>Story</h1>
                        <p className='pt-5 w-5/6 m-auto font-semibold'>
                            {filtered[0]?.description}
                        </p>
                    </div>
                    <div className='w-full flex pt-7'>
                        <button className='btn-primary m-auto'>View Certification</button>
                    </div>
                </div>
            </div>
            <div className='bg-primary w-2/5 opacity-0 md:opacity-100 absolute bottom-0 left-0 rounded-tr-full'>
                    <p className='text-center text-white font-bold monserrat text-6xl p-6'>{filtered[0]?.name}</p>
            </div>
            <div className='w-100'>
                <img className='md:right-1 lg:right-5 m-auto md:absolute md:bottom-0' src={GGwhite} alt="GG" />
            </div>
        </div>
    )
}

export default PlantDetail