import React from "react";
import { GrMoney } from "react-icons/gr";

const Menu = ({menuType}) => {

  return (
    <div className="w-full flex flex-wrap justify-between bg-white py-5 px-2 sm:py-5 sm:px-10">
    
      {menuType == "store"? 
      <div className="space-x-5">
        <button className="btn-white text-blueDark">Cards boosters</button>
        <button className="btn-white text-blueDark">Gifts</button>
        <button className="btn-white text-blueDark">Merch</button>
      </div>
      : menuType == "collection"?
      <>
        <button className="btn-white text-blueDark">Cards</button>
      </>
      : null
      }
  

      <div className="input-border text-blueDark flex gap-3 items-center w-fit">
        <GrMoney className="text-white" /> 1000
      </div>
    </div>
  );
};

export default Menu;
