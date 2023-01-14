import React from 'react'
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { CgTrash } from 'react-icons/cg'

const TodoItem = ({ description, check, taskCompleted, deleteTask }) => {
  return (
    <div className={ `list-item ${check ? 'item-check': ''}`} >
      <li>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          { check ? 
              <MdCheckBox size='25' onClick={() => taskCompleted(description)} />
            :<MdOutlineCheckBoxOutlineBlank 
                onClick={() => taskCompleted(description)}
                size='25' 
                className='icon-check' 
              />
          }
          <p className='spacing-1' style={{ fontSize: 15 }}>{ description }</p>
          <CgTrash className='spacing-1 icon-trash' size='25' onClick={() => deleteTask(description)} />
        </div>
      </li>
    </div>
  )
}

export default TodoItem