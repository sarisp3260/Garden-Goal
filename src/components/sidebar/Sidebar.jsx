import { HashLink } from 'react-router-hash-link'
import GG from '../../assets/GGwhite2.svg'
import friends from '../../assets/friends.svg'
import collection from '../../assets/collection.svg'
import store from '../../assets/store.svg'
import rewards from '../../assets/rewards.svg'

const Sidebar = () => {
    return (
        <div className='bg-purple h-screen w-28 flex flex-col justify-between items-center'>
            <HashLink smooth to="/game/:nickname/garden" className='flex flex-col w-full items-center justify-center hover:bg-primary aspect-square duration-300'>
                <img className='w-9/12' src={GG} alt="" />
                <p className='font-montserrat text-white'>Home</p>
            </HashLink>
            <HashLink smooth to="/game/:nickname/friends" className='flex flex-col w-full items-center justify-center hover:bg-primary aspect-square duration-300'>
                <img className='w-9/12' src={friends} alt="" />
                <p className='font-montserrat text-white'>Friends</p>
            </HashLink>
            <HashLink smooth to="/game/:nickname/collection" className='flex flex-col w-full items-center justify-center hover:bg-primary aspect-square duration-300'>
                <img className='w-9/12' src={collection} alt="" />
                <p className='font-montserrat text-white'>Collection</p>    
            </HashLink>
            <HashLink smooth to="/game/:nickname/store" className='flex flex-col w-full items-center justify-center hover:bg-primary aspect-square duration-300'>
                <img className='w-9/12' src={store} alt="" />
                <p className='font-montserrat text-white'>Store</p>    
            </HashLink>
            <HashLink smooth to="/game/:nickname/rewards" className='flex flex-col w-full items-center justify-center hover:bg-primary aspect-square duration-300'>
                <img className='w-9/12' src={rewards} alt="" />
                <p className='font-montserrat text-white'>Rewards</p>    
            </HashLink>
        </div>
    )
}

export default Sidebar