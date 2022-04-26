import {FaUserCircle, FaQuestion, FaSignInAlt, FaTrophy, FaStore, FaBook, FaUsers,FaAngleDown, FaAngleUp, } from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import logo from '../../assets/Logo/GG-LOGO-DARK.png'

import { useState } from 'react'
import Item from './item'

const Itemnav = ({ responsive }) => {

    const [drop , setDrop] = useState(false)

  return (
    <>
        {responsive === "show" ? 
        <>
        <Item title="Garden">
            <img src={logo} alt="" className='w-10'/>
        </Item>
        <Item title="Friends">
            <FaUsers className='text-3xl'/>
        </Item>
        <Item title="Collection">
            <FaBook className='text-3xl'/>
        </Item>
        <Item title="Store">
            <FaStore className='text-3xl'/>
        </Item>
        <Item title="Rewards">
            <FaTrophy className='text-3xl'/>
        </Item>

        <div className="flex items-center gap-5 text-blueDark hover:text-white/30" onClick={() => setDrop(!drop)}>
            <FaUserCircle className='text-3xl'/>
            <span className='text-xl'>User</span>
            {drop === false ? <FaAngleDown className='text-3xl' onClick={()=> setDrop(!open)}/> : <FaAngleUp  className='text-3xl' onClick={()=> setDrop(!open)}/>}
        </div> 
        {drop && 
        <div className='bg-purple text-white w-full p-5 rounded-lg flex flex-col gap-3'>
            <Item title="FarmerName">
                <FaUserCircle className='text-3xl'/>
            </Item>
            <Item title="Instructions">
                <FaQuestion className='text-3xl'/>
            </Item>
            <Item title="Configuration">
                <BsGearFill className='text-3xl'/>
            </Item>
            <Item title="Log out">
                <FaSignInAlt className='text-3xl'/>
            </Item>
        </div>}


        </>
        : 
        <>
            <Item title="FarmerName">
                <FaUserCircle className='text-3xl'/>
            </Item>
            <Item title="Instructions">
                <FaQuestion className='text-3xl'/>
            </Item>
            <Item title="Configuration">
                <BsGearFill className='text-3xl'/>
            </Item>
            <Item title="Log out">
                <FaSignInAlt className='text-3xl'/>
            </Item>
        </>}

    </>
  )
}

export default Itemnav