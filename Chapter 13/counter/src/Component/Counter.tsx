import React,{FC, useState} from 'react'

type props = {
  count : number
}

const Counter:FC<props> = (props) => {
  const [state, setState] = useState<any>({count : props.count})

  const handleClick = () =>{
    setState({count: state.count + 1})
    console.log(state)
  }

  return (
    <div>
      {state.count}
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter


