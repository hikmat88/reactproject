import { useEffect,useState} from "react"


const IncrementDecrement = () => {
    const [num, setNum]=useState(0)
    const increment =()=>(
        setNum (num+1)
    )

    const decrement =()=>(
        setNum (num-1)
    )
    useEffect(()=>{
        alert('this is a side Effect due to UseEffect hooks')
    },[])

  return (

    <>
    <h2>{num}</h2>
    {
        num<10 &&
        <button className='btn btn-primary' onClick={increment}>Click to increase</button>
    }
  
    &nbsp;  &nbsp;

    {
        num>0 &&
        <button className='btn btn-info' onClick={decrement}>Click to decrease</button>
    }


    </>
  )
}

export default IncrementDecrement