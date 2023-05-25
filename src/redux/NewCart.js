import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const NewCart = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <h2 className='text-primary'>The Cart Number is {data.cart}</h2>
    <Item/>
    </>
  )
}
export default NewCart
