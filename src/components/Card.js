import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <>

      <div class="col">
        <div class="card shadow">
          <img src={props.item.image} class="card-img-top" alt={props.item.title} />
          <div class="card-body">
            <h5 class="card-title">{props.item.title.slice(0,10)}</h5>
           <h5 class="card-title">${props.item.price}</h5>
            <Link className='btn btn-success' to={`/productdetails/${props.item.id}`}>View Details</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card