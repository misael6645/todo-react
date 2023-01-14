import React from 'react'
import { FaListAlt } from 'react-icons/fa'

const TodoTitle = () => {
  return (
    <div className='content-title'>
        <FaListAlt size={50} color='white' />
        <p className='font-bold spacing-1' style={{ color: 'white' }}>TaskMachine</p>
    </div> 
  )
}

export default TodoTitle