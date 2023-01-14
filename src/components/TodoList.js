import React from 'react'

const TodoList = ({ children }) => {
  return (
    <section className='todo-list' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ul>
        { children }
      </ul> 
    </section>
  )
}

export default TodoList