import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <link to='/test'>About</link>
    <Link to='/login'>Login</Link>
    </>
  )
}

export default TestNav