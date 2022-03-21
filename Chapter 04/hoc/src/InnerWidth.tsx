import React,{useEffect,useState} from 'react'

const withInnerWidth = (Component:any) => (props:any) =>{
  const [innerWidth, setinnerWidth] = useState(window.innerWidth)

  const handleResize =() =>{
    setinnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () =>{
      // <<< This emulates the componentWillUnmount
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return < Component {...props} innerWidth={innerWidth}/>
}


export default withInnerWidth
