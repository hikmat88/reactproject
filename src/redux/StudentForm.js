import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
    const [name,setName]=useState('')
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        dispatch({type:"CHANGE_NAME",payload:name})
        setName('')
    }
    const handleChange=e=>{
        setName(e.target.value)
    }

  return (
    <>
    <input type='text' name='stdnt' onChange={handleChange} value={name}/>
    &nbsp;
    <button className='btn btn-warning' onClick={handleSubmit}>Name</button>
    
    </>
  )
}

export default StudentForm