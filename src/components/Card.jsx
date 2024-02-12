import React, { useState } from 'react'


function Card({title ='title',description='description', label,options}) {
          
  const [selectedOption,setSelectedOption] = useState();

  const handleChange = (event)=>{
              setSelectedOption(event.target.value)
  }
        
       
  return (
    <>
        <div className="container" style={{backgroundColor:"white", color:"black", border:"2px solid black", borderRadius:"10px"}}>
             <div className="card">
                 <h2>{title}</h2>
                  <h3>{description}</h3>
            </div>
             
             
            <label htmlFor={label} style={{margin:'20px'}}>{label}</label>
            <select id={label} value={selectedOption} onChange={handleChange} required>
                <option value="">Select One</option>
                {options.map((option,index)=>(
                    <option key={index} value={option.value}>{option.label}</option>
                ))}

             </select>
      

        </div>
    </>
  )
}

export default Card