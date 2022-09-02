import { FaSearch, FaCog } from "react-icons/fa";

/**
 * Component from many pages which has the functionality to filter and config
 */

const ConfigSearcher = ({ searching, setSearch }) => {

  return (
    <div className="bg-blueDark pb-5 md:pb-0">
      <div className="flex flex-wrap gap-5 justify-center py-5 items-center md:justify-between px-5 md:px-10">
        <select className="select order-1" name="filter" id="filter">
          <option className="rounded-3xl" value="0">
            All
          </option>
          <option value="1">Favorite</option>
        </select>

        <div className="search relative order-3 md:order-2">
          <input className="input-border w-64 xs:w-80 md:w-96" type="text" value={searching} onChange={(e) => setSearch(e.target.value)}/>
          <FaSearch className="text-xl text-white absolute right-4 top-3" />
        </div>

        <FaCog className="text-white text-xl hover:rotate-45 duration-500 order-2 md:order-3" />
      </div>

      
    </div>
  );
};

export default ConfigSearcher;
