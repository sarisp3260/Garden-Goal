import { FaLeaf } from "react-icons/fa";
import Menu from "../Share/Menu";

const SideMenu = ({ menuType }) => {
  return (
    <div className="w-full flex flex-col items-center mt-4">
      <Menu menuType={menuType} />

      {menuType === "collection" && (
        <div className="flex gap-3 flex-wrap items-center w-full md:w-2/4 justify-between py-5 px-2 sm:p-5 ">
          <div className="w-fit flex items-center gap-3 input-border hover:bg-white hover:text-blueDark duration-500">
            <p className="bg-purple w-10 h-10 flex items-center justify-center rounded-full">
              L1
            </p>
            <span>10</span>
          </div>
          <div className="w-fit flex items-center gap-3 input-border hover:bg-white hover:text-blueDark duration-500">
            <p className="bg-purple w-10 h-10 flex items-center justify-center rounded-full">
              L2
            </p>
            <span>10</span>
          </div>
          <div className="w-fit flex items-center gap-3 input-border hover:bg-white hover:text-blueDark duration-500">
            <p className="bg-purple w-10 h-10 flex items-center justify-center rounded-full">
              L3
            </p>
            <span>10</span>
          </div>
          <div className="w-fit flex items-center gap-3 input-border hover:bg-white hover:text-blueDark duration-500">
            <p className="bg-gradient-to-t to-purple from-white w-10 h-10 flex items-center justify-center rounded-full text-blueDark">
              <FaLeaf />
            </p>
            <span>10</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
