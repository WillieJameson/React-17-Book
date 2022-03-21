import { useState, useEffect, useMemo, useCallback } from "react";
import React from 'react'

//component 
import List, {Todo} from './List'

const initialTodo = [
  {id: 1, task: "Go shopping"},
  {id: 2 , task: "Pay the electricity bill"}
]

const App = () => {
  const [TodoList, setTodoList] = useState(initialTodo);
  const [task, settask] = useState('')
  const [Term, setTerm] = useState('')
  

  const handleSearch = () =>{
    setTerm(task)
  }

  const FilteredList = useMemo( ()=> TodoList.filter((todo:Todo) => {
    console.log('Filtering...');
    return todo.task.toLowerCase().includes(Term.toLocaleLowerCase())
  }), [Term,TodoList])

  const handleDelete = useCallback((taskId : number) =>{
    const newTodoList = TodoList.filter((todo: Todo)=> todo.id !== taskId)
    setTodoList(newTodoList)
  },[TodoList])

  const handleCreate = () =>{
    const newTodo ={
      id: Date.now(),
      task
    }
    setTodoList([...TodoList,newTodo]);
    settask('')
  }

  const printTodoList = useCallback(() =>{
    console.log('Changing todoList', TodoList)
  },[TodoList])

  useEffect(() => {
    printTodoList()
  }, [TodoList, printTodoList])

  useEffect(() => {
    console.log('Rendering <App/>')
  })


  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>

      <List todoList= {FilteredList} handleDelete={handleDelete} />
    </div>
  )
}

export default App