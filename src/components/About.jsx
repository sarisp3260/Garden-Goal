import React from "react";

export const About = () => {
  return (
    <section
      className="grid grid-cols-1 place-items-center gap-5 px-4 py-5 md:grid-cols-2 md:px-10"
      id="about"
    >
      <div className="plant-img">
        <img
          className=" w-52 md:w-64"
          src="https://dsm01pap001files.storage.live.com/y4mcjWVgrMqk6BdNj9Upook51l3yFsxG47PaGBOzAqfBgWlhdgBB4yHWI0-TOaNdeIvFTrW4We2DyXD3lE8JagmpU3BOAjbY1ZKpZXymhvZZVBUDqwL7EbryaRxmK1qvqFIh8qhovvy4yhTeHZkoepSTjwrjtKsOTvO9EFVgSbbI_nSzp08ux3zbTNaQXe-gwrA?width=859&height=1385&cropmode=none"
          alt=""
        />
      </div>
      <div className="text-about flex flex-col gap-5 lg:gap-10 items-center">
        <h1 className="text-2xl font-extrabold sm:text-3xl  text-blueDark">
          GARDEN GOAL
        </h1>
        <p className="text-lg">
          Garden Goal was born from the idea of helping to centralize the
          information about the individual competencies of each student and
          their development in each one of them. Likewise, to carry out and
          evaluate this process in an interactive way. In the same way, it seeks
          the incentive to acquire new skills through logic challenges.
        </p>
        <button className="btn-primary w-1/2">Learn More</button>
      </div>
    </section>
  );
};
