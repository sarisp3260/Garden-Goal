import tree from "../../assets/Landing/tree.svg";
import land from "../../assets/Landing/land.svg";
import ground from "../../assets/Landing/ground.svg";
import seed1 from "../../assets/Landing/seed1.svg";
import landscape from "../../assets/Landing/landscape.svg";

const Scroll = () => {
  return (
    <>
      <div className="relative flex flex-col items-end justify-between h-96 overflow-hidden bg-gradient-to-t from-purple/80 to-white md:h-screen">
        <img
          src={tree}
          alt="tree"
          className="w-32 md:w-80 absolute bottom-0 left-0 z-40"
        />
        <div className="relative pr-10 pt-10 font-bold text-2xl text-blueDark md:text-4xl lg:text-7xl md:pt-20 z-20">
          <h1 className="text-blueDark/10">The best land to grow</h1>
          <h1 className="absolute top-10 ml-1 md:top-20">
            The best land to grow
          </h1>
        </div>

        <img
          src={landscape}
          alt=""
          className="absolute w-1/2 h-auto bottom-8 right-0 md:w-1/3 md:bottom-16"
        />
        <div className="relative  w-full h-16 z-30">
          <img
            src={seed1}
            alt="plant"
            className="w-8 absolute inset-x-1/2 ml-10 bottom-5 md:w-16 md:ml-14 z-30"
          />
          <img
            src={ground}
            alt="plant-ground"
            className="w-20 absolute inset-x-1/2 bottom-0 md:w-32 z-20"
          />
          <img
            src={land}
            alt="land-style"
            className="w-full absolute -bottom-10 sm:-bottom-20 md:-bottom-32 xl:-bottom-60 2xl:-bottom-72"
          />
        </div>
      </div>
    </>
  );
};

export default Scroll;
