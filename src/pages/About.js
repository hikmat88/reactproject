import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import IncrementDecrement from '../hooks/IncrementDecrement'
import axios from 'axios'

const About = () => {
  const [products, setProduct] = useState([])
  const [limit,setLimit]=useState(12)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))

  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-evenly'>
          <div className='col-md-3'>1
            <h2>Departments</h2>
            <a href='#' className='text-decoration-none text-primary'>select All</a>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Amozon Devices
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Appliances
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Electronics
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Mountain view
              </label>
            </div>
            <h3>Deal Type</h3>
            <ul className='list-style-none'>
              <li><a href='#' className='fw-bold text-decoration-none'>All Deals</a></li>
              <li><a href='#' className='text-decoration-none'>Top Deal</a></li>
              <li><a href='#' className='text-decoration-none'>Lightening Deals</a></li>
              <li><a href='#' className='text-decoration-none'>Best deals</a></li>


            </ul>
          </div>
          <div className='col-md-8'>
            <div class='row row-cols-1 row-cols-md-4 g-4'>
            {products.slice(0,limit).map((product,i) => (
              <Card item={product} key={i} />
            ))}
        

            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-6'>
                {limit<products.length && <button className='btn btn-warning' onClick={()=>setLimit(limit+3)}>Load More</button>}
                &nbsp;&nbsp;

                {limit >12 &&
                 <button className='btn btn-danger' onClick={()=>setLimit(limit-3)}>Show Less</button>}
              </div>
              </div>
            <IncrementDecrement/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About