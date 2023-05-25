import React from 'react'
import { useDispatch } from 'react-redux'

const Item = () => {
    const Dispatch=useDispatch()
    //add
    const add=()=>(
        Dispatch({type:"ADD_TO_CART"})
    )
    //remove
    const remove=()=>(
        Dispatch({type:"REMOVE_FROM_CART"})
    )
  return (
    <>
    <button className='btn btn-primary' onClick={add}>Add to Cart</button>
    &nbsp;  &nbsp; 
    <button className='btn btn-danger' onClick={remove}>Remove to Cart</button>
    </>
   
  )
}

export default Item