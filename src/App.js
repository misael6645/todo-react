import React, { useState } from 'react'
import TodoTitle from './components/TodoTitle'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const listTodo = [
  {
    description: 'Hacer mis tareas pendientes',
    check: true 
  },
  {
    description: 'Realizar Pendientes',
    check: true 
  },
  {
    description: 'Presentar lo realizado',
    check: false
  }
]

function App() {
  const [ searchValue, setSearchValue ] = useState('')
  const [ task, setTask ] = useState(listTodo)

  let totalCompleted = task.filter( item => item.check == true).length
  let todoList = []

  if(searchValue != ''){
    const text = searchValue.toLocaleLowerCase();
    todoList = task.filter(item => {
      const todoDescription = item.description.toLowerCase()
      return todoDescription.includes(text) 
    })
  }else todoList = task

  const taskCompleted = (description) => {
    let auxTask = [...task]
    auxTask.map( item => {
      if(item.description == description){
        item.check = !item.check 
      }
    })
    setTask(auxTask)
  }

  const deleteTask = (description) => {
    let auxTask = [...task]
    let index = task.findIndex( item => item.description == description) 
    auxTask.splice(index, 1)
    setTask(auxTask)
  }

  return (
    <div className='content'>
      <TodoTitle />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      <p style={{ textAlign: 'left', color: '#d1d1d1' }}>Has completado {totalCompleted} de {task.length} tareas</p>
      <hr style={{ width: '80%' }} />
      <TodoList>
        { todoList.map( item => (
          <TodoItem 
            taskCompleted={taskCompleted}
            key={item.description} 
            description={item.description} 
            check={item.check} 
            deleteTask={deleteTask}
          />
        ))}
      </TodoList>
      <CreateTodoButton className='button-create' />
    </div>
  );
}

export default App;
