import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";

const RatingStar = (props) => {
    const rating =props.rating
    const stars=[]
    for (let i=1; i<=5; i++){
        if(i<=rating){
            stars.push(<FaStar Key={i}/>)
        }
        else if(i===Math.ceil(rating)&& !Number.isInteger(rating)){
            stars.push(<FaStarHalfAlt key={i}/>)
        }
        else{
          stars.push(<FaRegStar key={i}/>)
        }
    }
  return (
    <>
    {stars}
    </>
  )
}

export default RatingStar