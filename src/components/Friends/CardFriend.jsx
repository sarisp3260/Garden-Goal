import { FaRegStar, FaStar }from 'react-icons/fa'
import { useState } from 'react'
import logo from '../../assets/Logo/GG-LOGO-LIGHT.png'

const CardFriend = ({friend}) => {

    const [favorite, setFavorite] = useState(false)
    
  return (
    <div className='w-fit relative p-6 text-white text-center hover:scale-105 duration-400'>
        <div className="start text-2xl absolute top-2 right-2" onClick={()=>setFavorite(!favorite)}>
            {favorite ? <FaStar/> : <FaRegStar/>}
        </div>
        <img className='w-32 mx-auto py-4' src={logo} alt="" />
        <h1 className='text-3xl font-semibold'>{friend.username}</h1>
    </div>
  )
}

export default CardFriend