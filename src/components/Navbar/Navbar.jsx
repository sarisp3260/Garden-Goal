import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white lg:flex">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  justify-around">
            <span className="font-extrabold sm:text-3xl text-2xl text-blueDark">
              Garden Goal
            </span>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="!#"
                  className="text-blueDark px-3 py-2 rounded-md text-2xl font-medium font-bold"
                >
                  About
                </a>
                <a
                  href="!#"
                  className="text-blueDark px-3 py-2 rounded-md text-2xl font-medium font-bold"
                >
                  Contacts
                </a>

                <a
                  href="!#"
                  className="text-blueDark px-3 py-2 rounded-md text-2xl font-medium font-bold"
                >
                  Credits
                </a>
                <div className="flex gap-4">
                  <button className='btn-primary'>Log in</button>
                  <button className='btn-purple'>Sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-col "
            >
              <a
                href="!#"
                className="text-blueDark font-bold hover:bg-purple  block px-3 py-2 text-center rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="!#"
                className="text-blueDark font-bold hover:bg-purple  block px-3 py-2 text-center rounded-md text-base font-medium"
              >
                Contacts
              </a>

              <a
                href="!#"
                className="text-blueDark font-bold hover:bg-purple  block px-3 py-2 text-center rounded-md text-base font-medium"
              >
                Credits
              </a>

              <div className="flex flex-col w-1/2 justify-center mx-auto gap-4">
                <button className='btn-primary'>Log in</button>
                <button className='btn-purple'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};
