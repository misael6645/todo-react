import React from 'react'

const CreatetodoButton = ({ handleModal, ...props}) => {
  return (
    <section {...props} >
      <button onClick={handleModal} className='todo-button'>Agregar Tarea</button>
    </section>
  )
}

export default CreatetodoButton