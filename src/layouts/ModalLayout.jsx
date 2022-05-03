import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';

import React, { useState } from "react";

/**
 * This component recive prop such as children which is the conten in the modal, title optional and is a description of the content, and the last props in a state which will control de visualization of the modal 
 * 
 * const [ openModal, setOpenModal ] = useState(false)
 * @returns 
 */

const ModalLayout = ({ children , title, openModal, setOpenModal}) => {
  return (
    <>
      {openModal &&
      <div className='min-h-screen h-full w-full bg-blueDark/20 backdrop-blur-md absolute top-0 z-40'>
        <div className="h-screen w-full flex items-center justify-center">
          <div className="modal bg-purple/90 w-full h-fit rounded-lg p-5 md:w-fit">
              <div className="header w-full flex justify-between">
                <h1 className='text-lg font-bold md:text-2xl'>{title}</h1>
                <FaTimes className='text-3xl hover:text-red-500' onClick={()=> setOpenModal(false)}/>
              </div>
              <div className="children p-3 flex-col max-h-screen overflow-y-auto items-center justify-center">
                  {children}
              </div>
          </div>
        </div>
      </div>}
    </>
  )
}
ModalLayout.propTypes = {
  title: PropTypes.string
}
export default ModalLayout