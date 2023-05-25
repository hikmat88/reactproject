import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Card from './Card'
import axios from 'axios'

const Home = () => {
  const [products, setProduct] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))

  }, [])
  return (
    <>
      <Slider />
      <div class='container-fluid'>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {products.slice(0,10).map((product,i) => (
          
            <Card item={product} key={i} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Home