import React from "react";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import {MdOutlineTagFaces} from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contacts" className="px-5 md:px-10 py-10">
      
      <div className="flex justify-center items-center gap-3 uppercase text-3xl my-5 font-extrabold sm:text-4xl text-blueDark">
          Contact
          <MdOutlineTagFaces />
      </div>


      <div className="grid grid-cols-2 place-items-center gap-20 py-20 ">
        <a
          href="https://www.facebook.com/somoseducamas/"
          target="_blank"
          className="rounded-full"
        >
          <BsFacebook size={80}  className="hover:scale-110 duration-700 hover:text-primary"/>
        </a>
        <a href="https://www.instagram.com/somoseducamas/" target="_blank">
          <BsInstagram size={80} className="hover:scale-110 duration-700 hover:text-primary" />
        </a>
        <a href="https://github.com/programateacademy" target="_blank">
          <BsGithub size={80} className="hover:scale-110 duration-700 hover:text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/company/educam%C3%A1s/?viewAsMember=true"
          target="_blank"
        >
          <BsLinkedin size={80} className="hover:scale-110 duration-700 hover:text-primary" />
        </a>
      </div>
      
    </section>
  );
};
