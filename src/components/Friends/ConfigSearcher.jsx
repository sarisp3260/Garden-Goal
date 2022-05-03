import { FaSearch, FaCog } from 'react-icons/fa'

/**
 * Component from many pages which has the functionality to filter and config
 */

const ConfigSearcher = () => {
  return (
    <div className='bg-blueDark '>
        <div className='flex flex-wrap gap-5 justify-center py-5 items-center md:justify-around'>
            <button className='btn-white hover:bg-white/90'> 
            <select className='bg-transparent text-primary' name="filter" id="filter">
                <option value="0">All</option>
                <option value="1">Favorite</option>
            </select>
            </button>

            <div className="search relative hidden md:flex">
                <input className='input-border w-96' type="text" />
                <FaSearch className='text-xl text-white absolute right-3 top-3.5'/>
            </div>

            <FaCog className='text-white text-xl'/>
        </div>

        {/* Same input search but hidden in laptop */}
        <div className="search relative flex md:hidden">
            <input className='input-border w-full mx-5' type="text" />
            <FaSearch className='text-xl text-white absolute right-10 top-3.5'/>
        </div>
    </div>
  )
}

export default ConfigSearcher