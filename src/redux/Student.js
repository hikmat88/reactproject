import React from 'react'
import { useSelector } from 'react-redux'
import StudentForm from './StudentForm'

const Student = () => {
    const info=useSelector(store=>store.Student)
  return (
    <>

<h1>The name of student is {info.studentName}</h1>
<StudentForm/>
    </>
  )
}

export default Student