import React from 'react'
import { staticData } from '../data'
import './index.css'

const StaticData = () => {
  return (
    <div className='static-container'>
        {staticData.map((data)=>(
            <div key={data.id} className='static-content'>
                <h3>{data.name} </h3>
                <h2 style={{fontSize:'32px'}}> {data.metric}</h2>
                <h4>{data.name} </h4>
                <p style={{fontSize:'14px',opacity:'0.7'}}>{data.description}</p>
            </div>
        ))}
    </div>
  )
}

export default StaticData