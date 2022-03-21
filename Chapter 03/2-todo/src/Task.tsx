import React,{ FC, useEffect,memo } from 'react'

interface Props{
  id: number
  task: string
  handleDelete: any
}

const Task:FC<Props> = ({id,task,handleDelete}) => {
  useEffect(() => {
    console.log('Rendering <Task/>', task)
  })

  return (
    <div>
      <li>
        {task}
        <button onClick={()=>{handleDelete(id)}}>Delete</button>
      </li>
    </div>
  )
}

export default memo(Task)