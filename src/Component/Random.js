import React,{useState} from 'react'
import './Random.css'

export default function Random() {
    const [count,setCount] = useState(0)

     const geneateClick = ()=>{
          setCount(Math.ceil(Math.random() * 100))
    }

    const increaseNum = ()=>{
        setCount(count+1);
    }

    const decreaseNum = ()=>{
        setCount(count-1)
    }

  return (
    <div className='bg-container'>
        <div className='card-container'>
            <h1 className='main-heading'> Random Number</h1>
            <p className='para'> Generate the random number from 0 to 100</p>
            <div className='btn-container'>
            <button type='button' className='btn' onClick={increaseNum}> Increase +1 </button>
            <button type='button' className='btn' onClick={geneateClick} > Generate </button>
            <button type='button' className='btn' onClick={decreaseNum}> Increase -1 </button>
            </div>
            <p className='dy-para'> {count}</p>

        </div>
      
    </div>
  )
}
