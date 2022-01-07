import React from 'react'

const Button = () => {

  // const handleClick = (syntheticEvent : any) =>{
  //   console.log(syntheticEvent instanceof MouseEvent)
  //   console.log(syntheticEvent.nativeEvent instanceof MouseEvent)
  // }

  const handleEvent = (event:any) =>{
    switch(event.type){
      case 'click':
        console.log('clicked')
        break
      case 'dblclick':
        console.log('double clicked')
        break
      default:
        console.log('unhandled',event.type)
    }
}

  return (
    <button onClick={handleEvent} onDoubleClick={handleEvent} >
      Click me !
    </button>
  )
}

export default Button
