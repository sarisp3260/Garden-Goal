import React from "react";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
export const Contact = () => {
  return (
    <section id="contacts">
      <h2 className="text-2xl font-extrabold sm:text-3xl  text-blueDark overflow-hidden text-center">
        <span className="relative inline-block before:absolute before:top-2/4 before:border-y-2 before:border-blueDark before:w-screen after:mx-8 after:my-0 after:right-full after:absolute after:top-2/4 after:border-y-2 after:border-blueDark after:w-screen before:mx-8 before:my-0 before:right-full after:left-full">
          Contact
        </span>
      </h2>
      <div className="container grid grid-cols-2 place-items-center gap-9 ">
        <a
          href="https://www.facebook.com/somoseducamas/"
          target="_blank"
          className="rounded-full"
        >
          <BsFacebook size={80} />
        </a>
        <a href="https://www.instagram.com/somoseducamas/" target="_blank">
          <BsInstagram size={80} />
        </a>
        <a href="https://github.com/programateacademy" target="_blank">
          <BsGithub size={80} />
        </a>
        <a
          href="https://www.linkedin.com/company/educam%C3%A1s/?viewAsMember=true"
          target="_blank"
        >
          <BsLinkedin size={80} />
        </a>
      </div>
    </section>
  );
};
