import React from 'react'
import './footer.css'

const Subscribe = () => {
  return (
    <div className='subscribe-main'>
    <div className='subscribe-content'>
      <h2>Subscribe </h2>
      <p>lorem ipsumL orem Ipsum available, but the majority have suffered alteration in some form,  making this the first true </p>
      <div style={{marginTop:'14px'}}>
      <input className='subscribe-input' placeholder='Enter Your Email Adress' />
      <button className='btn-2'> Subscribe Now <i class="fa-solid fa-angle-right"></i> </button>
      </div>
    </div>
    <img alt='mobile-mail' src='https://img.freepik.com/premium-vector/hand-holding-smartphone-icon-flat-style-incoming-message-vector-illustration-isolated-background-email-notification-sign-business-concept_157943-5702.jpg' />
    </div>
  )
}

export default Subscribe