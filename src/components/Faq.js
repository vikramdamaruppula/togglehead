import React from 'react'
import './footer.css'

const Faq = () => {
  return (
    <div className='faq-main'>
        <h2 style={{textAlign:'center'}}> FAQ  </h2> 
        <div className='faq-container'>
          <p>How does an investor gain access to MF Utility</p>
          <i class="fa-solid fa-circle-plus fa-2xl"></i>
        </div>
        <div className='faq-container'>
          <p>Will investors be able to have multiple common account Numbers ?</p>
          <i class="fa-solid fa-circle-minus fa-2xl"></i>
        </div>
        <div className='faq-container'>
          <p>How does an investor gain access to MF Utility</p>
          <i class="fa-solid fa-circle-plus fa-2xl"></i>
        </div>
    </div>
  )
}

export default Faq