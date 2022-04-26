import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';

/**
 * This component recive prop such as children which is the conten in the modal, title optional and is a description of the content, and the last props in a state which will control de visualization of the modal 
 * 
 * const [ openModal, setOpenModal ] = useState(false)
 * @returns 
 */

const Modal = ({ children , title, openModal}) => {
  return (
    <>
      {openModal &&
      <div className='min-h-screen h-full w-full bg-blueDark/20 backdrop-blur-md absolute top-0'>
        <div className="h-screen w-full flex items-center justify-center">
          <div className="modal bg-white h-fit rounded-lg w-3/4 p-5">
              <div className="header w-full flex justify-end">
                  <FaTimes className='text-3xl hover:text-red-500' onClick={()=> openModal(false)}/>
              </div>
              <div className="children p-3 flex-col items-center justify-center">
                  <h1>{title}</h1>
                  {children}
              </div>
          </div>
        </div>
      </div>}
    </>
  )
}
Modal.propTypes = {
  title: PropTypes.string
}
export default Modal