import React from 'react'
import { timeData } from '../data'

const Upcoming = () => {
  return (
    <div className='upcoming-container'>
        <div style={{display:'flex',width:'24%',marginTop:'-10px'}}>
            <div>
                <h2> Upcoming <br /> Examinations</h2>
                <p>Enquire about the examinations & Register for exams</p>
            </div>
            <hr className='vertical-line' />
            
        </div>
        
        <div className='time-main-container'>
            {timeData.map((item)=>(
                <div className='time-container'>
                <i class="fa-solid fa-business-time fa-2xl" style={{color: '#002D62',padding:'10px'}}></i>
                <div className='time-content'>
                <h3>{item.metric} </h3>
                <p>{item.name} </p>
                {item?.description1 && <p>{item.description1} </p>}
                {item?.description2 && <p>{item.description2} </p>}
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Upcoming