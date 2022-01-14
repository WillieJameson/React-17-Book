import React,{FC, useState} from 'react'

const List:FC = () => {
  const [items, setitems] = useState<any>(['foo','bar'])

  const handleClick = () =>{
    // holder
    const newItems = items.slice()
    // add new element on the first array
    newItems.unshift('baz')

    setitems(newItems)
  }

  
  return (
    <div>
      <ul>
        {items.map((item:any,i:any)=>(
          <li key={i}>
            {item}
            <input type="text"/>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default List
