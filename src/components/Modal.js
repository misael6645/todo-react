import React from 'react'
import { createPortal } from 'react-dom'
import { MdOutlineClose } from 'react-icons/md'

const Modal = ({ children, handleModal }) => {
  return createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='modal-title'>Titulo del Modal</span> 
          <MdOutlineClose onClick={handleModal} className='icon-close' size={25} />
        </div>
        <div className='modal-container-form'>
          { children }
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal

