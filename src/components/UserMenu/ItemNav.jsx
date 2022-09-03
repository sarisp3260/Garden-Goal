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
        <Item title="Garden" url="/game/:nicname/garden">
            <img src={logo} alt="Logo" className='w-10'/>
        </Item>
        <Item title="Friends" url="/game/:nicname/friends">
            <FaUsers className='text-3xl'/>
        </Item>
        <Item title="Collection" url="/game/:nicname/collection">
            <FaBook className='text-3xl'/>
        </Item>
        <Item title="Store" url="/game/:nicname/store">
            <FaStore className='text-3xl'/>
        </Item>
        <Item title="Rewards" url="/game/:nicname/rewards">
            <FaTrophy className='text-3xl'/>
        </Item>

        <div className="flex items-center gap-5 text-blueDark hover:text-primary" onClick={() => setDrop(!drop)}>
            <FaUserCircle className='text-3xl'/>
            <span className='text-xl'>User</span>
            {drop === false ? <FaAngleDown className='text-3xl' onClick={()=> setDrop(!open)}/> : <FaAngleUp  className='text-3xl' onClick={()=> setDrop(!open)}/>}
        </div> 
        {drop && 
        <div className='bg-purple text-white w-full p-5 rounded-lg flex flex-col gap-3'>
            <Item title="FarmerName" url="/game/:nickname/profile">
                <FaUserCircle className='text-3xl'/>
            </Item>
            <Item title="Instructions" url="/game/instructions">
                <FaQuestion className='text-3xl'/>
            </Item>
            <button onClick={()=>{window.localStorage.removeItem("login")}}>
                <Item title="Log out" url="/">
                    <FaSignInAlt className='text-3xl'/>
                </Item>
            </button>
        </div>}


        </>
        : 
        <>
            <Item title="FarmerName" url="/game/:nickname/profile">
                <FaUserCircle className='text-3xl'/>
            </Item>
            <Item title="Instructions" url="/game/instructions">
                <FaQuestion className='text-3xl'/>
            </Item>
            <button onClick={()=>{window.localStorage.removeItem("login")}}>
                <Item title="Log out" url="/" >
                    <FaSignInAlt className='text-3xl'/>
                </Item>
            </button>
        </>}

    </>
  )
}

export default Itemnav