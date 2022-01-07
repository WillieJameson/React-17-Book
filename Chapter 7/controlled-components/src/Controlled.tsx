import React,{useState} from 'react'


const Controlled = () => {
  const [values, setvalues] = useState<any>({
    firstName:'Carlos',lastName:'Santana'
  })

  const handleChange = (e : any) =>{
    const {target : {name,value}} = e

    setvalues({
      [name] : value
    })
  }

  const handleSubmit = (e: any) =>{
    e.preventDefault();
    console.log(`${values.firstName} ${values.lastName}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
    </form>
  )
}

export default Controlled
