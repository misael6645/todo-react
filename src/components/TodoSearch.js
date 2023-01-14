import React from 'react'

const TodoSearch = ({ searchValue, setSearchValue }) => {
  
  return (
    <div className='content-search'>
      <input 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='input-search' 
        placeholder='Buscar Tarea'
      />
    </div>
  )
}

export default TodoSearch