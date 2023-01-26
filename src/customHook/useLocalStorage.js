import { useState } from 'react'

function useLocalStorage (key, initialValues){
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem(key)))

  if(!localStorage.getItem(key)){
    localStorage.setItem(key, JSON.stringify(initialValues))
  }

  const saveItem = (newTodos) => {
    localStorage.setItem(key, JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  return [todos, saveItem]
}

export default useLocalStorage