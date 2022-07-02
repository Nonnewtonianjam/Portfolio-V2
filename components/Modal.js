import React from 'react'

const Modal = ({visible, children, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'modal') onClose()
    }
    if (!visible) return null

  return (
    <div 
        id='modal'
        onClick={handleOnClose} 
        className='z-30 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        
        <div className={`relative flex h-4/5 lg:h-1/2 md:w-2/3 lg:w-1/2 items-center bg-white dark:bg-black p-2 rounded  overflow-auto ${visible === true ? 'modal active' : 'modal'}`}>
            {children}
            <div className='absolute bottom-4 right-4 button'>
                <button className='' onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
