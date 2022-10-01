import { Link, useLocation } from 'react-router-dom'
import GG from '../../assets/GGwhite2.svg'
import friends from '../../assets/friends.svg'
import collection from '../../assets/collection.svg'
import store from '../../assets/store.svg'
import rewards from '../../assets/rewards.svg'

const Sidebar = () => {

    const location = useLocation()
    const classLink = "h-1/5 text-white flex flex-col w-full items-center justify-center hover:bg-primary/80 aspect-square duration-300";

    return (
        <div className='fixed top-0 bg-purple h-screen w-28 flex flex-col justify-between items-center'>
            <Link smooth to="/game/:nickname/garden" className={location.pathname.includes("garden") ? classLink + " bg-primary p-2 border-y-4 border-white": classLink}>
                <img className='w-1/2' src={GG} alt="" />
                <p className='font-montserrat text-xl'>Home</p>
            </Link>
            <Link smooth to="/game/:nickname/friends" className={location.pathname.includes("friends") ? classLink + " bg-primary p-2 border-y-4 border-white": classLink}>
                <img className='w-1/2' src={friends} alt="" />
                <p className='font-montserrat text-xl'>Friends</p>
            </Link>
            <Link smooth to="/game/:nickname/collection" className={location.pathname.includes("collection") ? classLink + " bg-primary p-2 border-y-4 border-white": classLink}>
                <img className='w-1/2' src={collection} alt="" />
                <p className='font-montserrat text-xl'>Collection</p>    
            </Link>
            <Link smooth to="/game/:nickname/store" className={location.pathname.includes("store") ? classLink + " bg-primary p-2 border-y-4 border-white": classLink}>
                <img className='w-1/2' src={store} alt="" />
                <p className='font-montserrat text-xl'>Store</p>    
            </Link>
            <Link smooth to="/game/:nickname/rewards" className={location.pathname.includes("rewards") ? classLink + " bg-primary p-2 border-y-4 border-white": classLink}>
                <img className='w-1/2' src={rewards} alt="" />
                <p className='font-montserrat text-xl'>Rewards</p>    
            </Link>
        </div>
    )
}

export default Sidebar