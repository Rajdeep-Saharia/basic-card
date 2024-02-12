import React,{useState} from 'react'

function Button() {
     
      const [count,setCount] = useState(0);

      const handleCount = ()=>{
           setCount(count+1)
      }


  return (
    <div>
        <button onClick={handleCount} style={{margin:'10px'}}>Clicked: {count}</button>
    </div>
  )
}

export default Button