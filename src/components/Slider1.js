import React from 'react'
import {sliderData} from '../data'


const Slider1 = () => {
  return (
    <div>
    <div className='slider-container'>
    <div className='slider-wrapper'>
        {sliderData.map((items)=>(
            <div key={items.id} className='slider-content'>
            <h3>{items.name} </h3>
            <p style={{color:'#fff',fontWeight:'100',fontSize:'14px'}}>{items.description}</p>
            <button className='btn-2'>Know More <i class="fa-solid fa-angle-right"></i> </button>
            </div>
        ))}
     </div>
    </div>
    <p style={{color:'red'}}> Click the item and scroll </p>

    </div>

  )
}

export default Slider1