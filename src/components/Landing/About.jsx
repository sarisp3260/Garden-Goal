import React from "react";
import MainLayout from "../../layouts/MainLayout";

export const About = () => {
  return (
    <MainLayout>

      <section
        className="grid grid-cols-1 place-items-center gap-10 md:gap-5 md:grid-cols-2 pt-10 md:pt-0"
        id="about"
      >
        <div className="plant-img relative">
          <img
            className=" w-32 md:w-64 drop-shadow-2xl "
            src="https://dsm01pap001files.storage.live.com/y4mcjWVgrMqk6BdNj9Upook51l3yFsxG47PaGBOzAqfBgWlhdgBB4yHWI0-TOaNdeIvFTrW4We2DyXD3lE8JagmpU3BOAjbY1ZKpZXymhvZZVBUDqwL7EbryaRxmK1qvqFIh8qhovvy4yhTeHZkoepSTjwrjtKsOTvO9EFVgSbbI_nSzp08ux3zbTNaQXe-gwrA?width=859&height=1385&cropmode=none"
            alt=""
          />
          <div className="ring-[15px] ring-white/80 ring-inset bg-gradient-to-t from-purple to-primary opacity-90 absolute -inset-x-12 md:-inset-x-20 inset-y-4 w-56 h-full md:w-96 rounded-t-full  -z-10"></div>

          <div className="animate-pulse bg-fuchsia-400 blur-3xl opacity-90 absolute -inset-x-10 md:-inset-x-20 inset-y-4 w-32 h-w-32 md:w-64 md:h-64 rounded-full -z-20"></div>
          <div className="animate-pulse bg-sky-400 blur-3xl opacity-90 absolute inset-x-12 md:inset-x-20 inset-y-36 md:inset-y-48 w-32 h-32 md:w-64 md:h-64 rounded-full -z-20"></div>
        </div>
        <div className="text-about flex flex-col gap-5 lg:gap-10 items-center">
          <h1 className="text-2xl font-extrabold sm:text-3xl  text-blueDark">
            GARDEN GOAL
          </h1>
          <p className="text-lg px-3 md:text-xl lg:text-2xl">
            Garden Goal was born from the idea of helping to centralize the
            information about the individual competencies of each student and
            their development in each one of them. Likewise, to carry out and
            evaluate this process in an interactive way. In the same way, it seeks
            the incentive to acquire new skills through logic challenges.
          </p>
          <button className="btn-primary w-1/2">Learn More</button>
        </div>
      </section>

    </MainLayout>
  );
};
